import User from '../models/UsersModel.js'
import { validateID } from '../utils/validateID.js';

export const createUser = async (req,res) => {
  const { body } = req
  const newUser = new User(body);
  await newUser.save();
  return res.json({user: newUser})
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
