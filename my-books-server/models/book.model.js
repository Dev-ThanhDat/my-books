import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    genre: {
      type: String
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author'
    }
  },
  { timestamps: true }
);

export const Book = mongoose.model('Book', bookSchema);
