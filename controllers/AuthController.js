import User from '../models/UsersModel.js'
import { comparePasswords } from '../utils/bycript.js';
import signToken from '../utils/jsonwebtoken.js'

export const login = async (req,res) => {
  const { email,password } = req.body
  try{
    const userFound = await User.findOne({email});
    if(!userFound) return res.status(404).json({message:'User not found'});
    const match = await comparePasswords(password, userFound.password);
    if(!match) return res.status(400).json({message:'Wrong email or password'})
    const accessToken = signToken({userID: userFound._id});
    return res.status(200).json({accessToken})
  } catch(err){
    return res.sendStatus(400);
  }
}