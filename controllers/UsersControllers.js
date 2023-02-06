import User from '../models/UsersModel.js'
import { validateID } from '../utils/validateID.js';
import signToken from '../utils/jsonwebtoken.js'

export const createUser = async (req,res) => {
  const { body } = req
  const newUser = new User(body);
  const createdUser = await newUser.save();
  const accessToken = signToken({userID: createdUser._id})
  return res.json({user: newUser, accessToken})
}

export const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  return res.json({users: allUsers});
}

export const getUserByID = async (req, res) => {
  const { id } = req.params

  try {
    if (!validateID(id)) res.sendStatus(400)
    const userID = await User.findById(id);
    return res.json({ user: userID });
  } catch(error) { error.message }
}
