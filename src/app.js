import express from 'express';
import cookieParser from 'cookie-parser';
import {API_BASE_URL} from "../config/env.config.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('public'));

//routes
app.use(`${API_BASE_URL}/auth`, authRouter);

export default app;