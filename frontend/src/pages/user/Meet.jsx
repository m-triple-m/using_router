import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';

const socket = io(import.meta.env._VITE_API_URL);
const Meet = () => {

    const localVideoRef = useRef();
    const remoteVideoRef = useRef();
    const [peerConnection, setPeerConnection] = useState(null);
    const [roomId, setRoomId] = useState("demo-room");

    useEffect(() => {
        const pc = new RTCPeerConnection({
            iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
        });
        setPeerConnection(pc);

        // Local stream setup
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                localVideoRef.current.srcObject = stream;
                stream.getTracks().forEach(track => pc.addTrack(track, stream));
            });

        // Remote stream setup
        pc.ontrack = (event) => {
            remoteVideoRef.current.srcObject = event.streams[0];
        };

        // ICE candidates
        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit("ice-candidate", {
                    to: roomId,
                    candidate: event.candidate
                });
            }
        };

        // Socket event listeners
        socket.emit("join-room", roomId);

        socket.on("user-joined", async (userId) => {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socket.emit("offer", { to: userId, sdp: offer });
        });

        socket.on("offer", async ({ sdp, from }) => {
            await pc.setRemoteDescription(new RTCSessionDescription(sdp));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            socket.emit("answer", { to: from, sdp: answer });
        });

        socket.on("answer", async ({ sdp }) => {
            await pc.setRemoteDescription(new RTCSessionDescription(sdp));
        });

        socket.on("ice-candidate", async ({ candidate }) => {
            if (candidate) await pc.addIceCandidate(new RTCIceCandidate(candidate));
        });

        return () => {
            socket.disconnect();
            pc.close();
        };
    }, [roomId]);

    return (
        <div>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div>
                        <p className='text-center mb-5'>Client 1</p>
                        <video ref={localVideoRef} autoPlay playsInline muted style={{ width: "45%" }} />

                    </div>
                    <div>
                        <p className='text-center mb-5'>Client 2</p>

                        <video ref={remoteVideoRef} autoPlay playsInline style={{ width: "45%" }} />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Meet;