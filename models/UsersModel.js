import mongoose from 'mongoose';
import { hashPassword } from '../utils/bycript.js';
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  String,
  email: String,
  password: String,
});

userSchema.pre('save', async function(next) {
  const user = this;
  user.password = await hashPassword(user.password);
  next();
});

userSchema.methods.toJSON = function() {
 const user = this.toObject();
 delete user.password;
 delete user.__v;
 return user;
}

const User = mongoose.model('User', userSchema)

export default User
