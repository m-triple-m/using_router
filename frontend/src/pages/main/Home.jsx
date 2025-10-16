import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-white text-gray-900">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Seamless Video Meetings for Everyone
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Create or join secure meetings instantly — no sign-up, no downloads, just click and connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Start a Meeting
          </button>
          <div className="flex border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Enter meeting code"
              className="px-4 py-3 outline-none w-48"
            />
            <button className="bg-gray-200 px-4 py-3 hover:bg-gray-300 transition">
              Join
            </button>
          </div>
        </div>

        {/* Optional background video mock */}
        <div className="mt-10 max-w-4xl rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://cdn.dribbble.com/users/722835/screenshots/16891821/media/191b64e9b924d88f8852a85bfa47a796.png"
            alt="Video Call Mockup"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose StreamSync?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🔒",
              title: "Secure & Private",
              desc: "Your meetings are encrypted end-to-end for maximum security.",
            },
            {
              icon: "⚡",
              title: "One-Click Start",
              desc: "Start meetings instantly with just one click — no registration required.",
            },
            {
              icon: "🎥",
              title: "HD Streaming",
              desc: "Enjoy crystal-clear audio and video with low latency.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="bg-blue-50 py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {[
            {
              step: "1️⃣",
              title: "Create a Meeting",
              desc: "Click ‘Start a Meeting’ to instantly generate a unique meeting link.",
            },
            {
              step: "2️⃣",
              title: "Share the Link",
              desc: "Copy the link and share it with participants — via email or chat.",
            },
            {
              step: "3️⃣",
              title: "Connect & Collaborate",
              desc: "Join your call and collaborate in real-time with HD video.",
            },
          ].map((h, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow-sm">
              <div className="text-5xl mb-4">{h.step}</div>
              <h3 className="text-xl font-semibold mb-2">{h.title}</h3>
              <p className="text-gray-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} StreamSync. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
