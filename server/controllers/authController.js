import User from '../models/userModel.js';
import { httpStatus } from '../utilities/constant.js';

export const register = async (req, res) => {
    const { name, email, password, pic } = req.body;

    try {
        const user = await User.create({
            name: name,
            email: email,
            password: password,
            pic: pic,
        });

        if (user) {
            res.status(httpStatus.OK).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                pic: user.pic,
            });
        } else {
            throw new Error('Failled to create user!');
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const login = (req, res) => {};
