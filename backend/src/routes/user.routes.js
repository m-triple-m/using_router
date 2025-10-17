import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const savedUser = await registerUser();
        res.status(200).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

export default router;