import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";

//routes
import postRoutes from './routes/posts.router.js';
import userRoutes from './routes/users.router.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const connection_url = process.env.MONGODB_URL;
const port = process.env.PORT || 5000;

mongoose.connect(connection_url)
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch((error) => console.log(error.message)); 
