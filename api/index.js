import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoutes from '../api/route/user.route.js'
import authRoutes from '../api/route/auth.route.js'
import cookieParser from 'cookie-parser';
import postRoutes from '../api/route/post.route.js'
import commentRoutes from '../api/route/comment.route.js'
import cors from 'cors';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database Connected');
    })
    .catch((err) => {
        console.log(err)
    });


const app = express();

const __dirname = path.resolve();
app.use(cors(
    {
        origin: ["https://insights-blog-8bn9.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
))

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
