import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
        },
        email: {
            type: String,
            require: true,
            trim: true,
        },
        password: {
            type: String,
            require: true,
        },
        pic: {
            type: String,
            default:
                'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema, 'User');

export default User;
