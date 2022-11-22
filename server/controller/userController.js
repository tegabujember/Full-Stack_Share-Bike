const User = require('../models/userSchema');


exports.updateMe = async(req, res, next) => {
    try {
        // Create error if user POSTs password data
        if(req.body.password || req.body.passwordConfirm) {
            throw new Error('This route is not for password updates. Please use /updateMyPassword.')
        };

        // Update user document  
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            new: true,
            runValidators: true
        });
            
        res.status(200).json({
            status: 'success',
            data: {
              user: updatedUser
            }
          });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
         });
    }
};

exports.getAllUsers = async(req, res, next) => {
    try {
        const users = await User.find();

        if(!users){
            throw new Error('No users was found')
        };

        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
};

exports.getOneUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user){
            throw new Error('No user was found  with that id')
        };

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
};