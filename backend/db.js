import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults'

export default {
    connect: () => {
        dotenv.config()
        mongoose
        .connect("mongodb+srv://rakechen0307:92chen0307R@final.vz1zekv.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((res) => console.log("mongo db connection created"));
    }
};