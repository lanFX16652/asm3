import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// const signJWT = (user) => {
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
// }

const signup = async (req, res) => {
    console.log(req.body)
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);

        //Create new user
        const newUser = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashed,
            phone: req.body.phone,
        })
        //Save to database
        const user = await newUser.save();

        //Return api
        return res.status(201).json({
            user: user
        })
    } catch (err) {
        console.log(err)
        return res.status(500)
    }
}

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.status(400).json({ message: "Invalid Email!" })
            }
            bcrypt
                .compare(password, user.password)
                .then((doMatch) => {
                    if (doMatch) {
                        req.session.user = user;
                        return res.status(200).json({
                            user: user

                        })
                    } else {
                        return res.status(400).json({ message: "Invalid Password!" })
                    }
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({ message: "Internal Server Error" })
                })
        })
}

const logout = async (req, res, next) => {
    console.log(req.session)
    req.session.destroy(function (err) {
        console.log(err, 'destroy session fail')

        if (err) {
            return next(err)
        }
        res.clearCookie('connect.sid')
        res.status(200).json({
            message: 'Log out success'
        })
    })
}

export { signup, login, logout }