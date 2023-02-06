import mongoose from 'mongoose';
const { Schema } = mongoose;
import sluglify from '../utils/sluglify.js';

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  votes: {
    type: [{
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    }],
    default: []
  }
}, {
  timestamps: true
});


postSchema.pre('save', function(next) {
  const post = this;
  post.slug = sluglify(post.title);
  console.log('el post creado es: ', post);
  next();
});


const Post = mongoose.model('Post', postSchema)

export default Post