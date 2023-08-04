import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import session from 'express-session'
import cookieParser from "cookie-parser";
import { oneDay } from './constant/index.js'
import authenticateRoute from "./routers/auth.js";
import productRoute from "./routers/product.js";
//  constance
const MONGODB_URI = "mongodb://127.0.0.1:27017/asm3"

//  config .env
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

// Create mongodb session store
// const MongoDBStore = require('connect-mongodb-session')(session);
import MongoDBStore from 'connect-mongodb-session';
import mediaRoute from "./routers/media.js";
import userModel from "./models/userModel.js";


app.use(cors());
app.use(express.json());
app.use(cookieParser())


const mongodbStore = MongoDBStore(session)
const store = new mongodbStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

// add middleware session
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    resave: true,
    store
}));


app.use(async (req, res, next) => {
    if (!req.session.user) {
        next()
    }

    try {
        const user = await userModel.findById(req.session.user._id)
        req.user = user
        next()
    } catch (error) {
        console.log(error)
    }
})

//init web routes
app.use(authenticateRoute);
app.use(productRoute);

mediaRoute(app)

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message)
})

// Database connect
mongoose
    .connect(MONGODB_URI)
    .then(result => console.log("Database connect success"))
    .catch(err => console.log("Database connect fail"))

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

