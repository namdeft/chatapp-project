import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const URI = process.env.MONGODB_URI;
        const connect = await mongoose.connect(URI, {
            useNewURLParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        throw new Error(error);
    }
};

export default connectDb;
