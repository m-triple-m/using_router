import Model from '../models/user.model.js';

const registerUser = async (userData) => {
    try {
        const savedUser = await new Model(userData).save();
        return savedUser;
    } catch (error) {
        console.log(error);
    }
};

export { registerUser };