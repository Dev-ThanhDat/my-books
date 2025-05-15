import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    }
  },
  { timestamps: true }
);

export const Author = mongoose.model('Author', authorSchema);
