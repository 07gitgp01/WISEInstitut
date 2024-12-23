import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../models/userModel';
import { nextTick } from 'process';

const User = mongoose.model('User', UserSchema);

export const register = (req, resp) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.hashPassword);
    newUser.save((error, user) => {
        if(error){
            return resp.status(400).send({message: error});
        } else{
            use.hashPassword = undefined;
            return resp.json(user);
        }
    })

}
export const login = (req, resp) => {
    User.findOne({email: req.body.email}, (error, user) => {
        if(error) throw error;
        if(!user){
            resp.status(401).json({message: 'Authentication failed. No user found'});
        }else if(user){
            if(!user.comparePassword(req.body.hashPassword, user.hashPassword)){
                resp.status(401).json({message: 'Authentication failed. Wrong password'});
            }
        }else {
            return resp.json({token: jwt.sign({ email: user.email, username: user.username, _id: user.id}, 'RESTFULAPIs')});
        }
    })
}
export const loginRequired = (req, resp) => {
    if(req.user){
        next();
    } else {
        return resp.status(401).json({message: 'Unautorized user'})
    }
}
