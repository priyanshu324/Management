const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
var { expressjwt: jwt } = require("express-jwt");
const JWT = require("jsonwebtoken");

//middleware
const requireSingIn = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
});


// register
const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // validation
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'name is required',
            })
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'email is required',
            })
        }
        if (!password || password.len < 6) {
            return res.status(400).send({
                success: false,
                message: 'password is required and 6 character long ',
            })
        }

        // exsiting 
        const exsitingUser = await userModel.findOne({ email })
        if (exsitingUser) {
            return res.status(500).send({
                success: false,
                message: 'User Already Register With This Email',
            })
        }

        // hashed password
        const hashedPassword = await hashPassword(password);

        // save user
        const user = await userModel({ name, email, password: hashedPassword }).save();

        return res.status(201).send({
            success: true,
            message: 'registeration successfull please login',
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'error in register api ',
            error,
        })
    }
};


// login 
const loginController = async (req, res) => {
    try {

        const { email, password } = req.body;
        // validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: 'please provide email and password',
            })
        }
        //    find user 
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'user not found please register first',
            })
        }

        // match password 
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(500).send({
                success: false,
                message: 'invlaid username or password',
            })
        }


        // token jwt 
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })

        // undefined
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: 'login successfully',
            user,
            token,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'error in login api ',
            error,
        })
    }
}




module.exports = { registerController, loginController, requireSingIn }