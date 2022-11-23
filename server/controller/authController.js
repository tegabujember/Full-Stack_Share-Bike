const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}
// create a new user and sign him in with a JWT
exports.signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const newUser = await User.create({
            username,
            email,
            password    
        });

        const token = signToken(newUser._id);

        res.cookie('jwt', token, {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
            secure: true,
            httpOnly: true
        });

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            messsge: error
        })
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password exist
    if (!email || !password) {
        return next(new Error('Please provide email and password!'));
    }

    try {
        // Check if user exists and password is correct
        const user = await User.findOne({ email }).select('+password');

        if(!user || !(await user.correctPassword(password, user.password))) {
            return next(new Error('Incorrect email or password!'));
        };

        const token = signToken(user._id);

        user.password = undefined;

        res.cookie('jwt', token, {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
            secure: true,
            httpOnly: true
        });

        res.status(200).json({
            status: 'success',
            token
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            messsge: error
        })
    }
};

exports.logout = (req, res) => {
    res.cookie('jwt', 'Logout', {
        expires: new Date(Date.now() + 1 * 1000),
        httpOnly: true
    });

    res.status(200).json({
        status: 'success'
    })
};

exports.protect = async (req, res , next) => {
    // Getting token and check if it's there
    let token;

    if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        } else if(req.cookie.jwt) {
            token = req.cookie.jwt
        }
        
        if(!token) {
            throw new Error('You are not logged in! Please log in to get access.')
        }
        
    try {
    // Verification token
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);

    const currentUser = User.findById(decoded.id);
    if(!currentUser) {
        throw new Error('The user belonging to this token no longer exists.')
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    res.locals.user = currentUser;
    next()
   } catch (error) {
        next(error)
   }
} 

// Only for rendered pages
exports.isLoggedIn = async (req, res, next) => {
    if(req.cookie.jwt) {
        try {
            // Verify token
            const decoded = await  jwt.verify(token, process.env.SECRET_KEY);
            if(!currentUser) {
                return next()
            }

             // THERE IS A LOGGED IN USER
            res.locals.user = currentUser; 
            return next()
        } catch (error) {
            return next();
        }
    }
    next();
};

exports.updatePassword = async(req, res, next) => {
    try {
    // Get user from collection
    const user = await User.findById( req.user.id ).select('+password');

    // Check if POSTed current password is correct
    if(!(await user.correctPassword(req.body.passwordCurrent, user.password))){
        throw new Error('Your current password is wrong')
    }

    // If so, update password
    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

     // Log user in, sent JWT
     createSentToken(user, 200, res);
    } catch (error) {
        res.status(200).json({
            status: 'fail',
            messsge: error
        })
    }
};

