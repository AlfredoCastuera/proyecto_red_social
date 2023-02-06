import mongoose from 'mongoose';

export const validateID = (id) => mongoose.isValidObjectId(id);