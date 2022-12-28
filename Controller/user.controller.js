const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../Models/user.model')
const registerUser = async (req, res) => {
    // console.log(req.body)
    try {
        const { name, email, password } = req.body;
        // check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // create a new user
        const newUser = new User({
            name,
            email,
            password
        });

        // hash the password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        // save the user to the database
        await newUser.save();
        res.status(200).send({ message: "Registered Successfuly" })

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // create a JSON web token
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: 3600 // 1 hour
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}


module.exports = { registerUser, loginUser }