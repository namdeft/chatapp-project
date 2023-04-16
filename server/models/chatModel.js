import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
    {
        chatName: {
            type: String,
            require: true,
            trim: true,
        },
        isGroupChat: {
            type: Boolean,
            default: false,
        },
        users: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        lastestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        },
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model('Chat', chatSchema, 'Chat');

export default Chat;
