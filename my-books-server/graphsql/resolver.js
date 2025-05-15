import { Author } from '../models/author.model.js';
import { Book } from '../models/book.model.js';

export const resolvers = {
  Query: {
    books: async (parent, args) => {
      const conditions = {};
      return await Book.find(conditions);
    },

    book: async (parent, args) => {
      return await Book.findById(args.id);
    },

    authors: async (parent, args) => {
      return await Author.find();
    },

    author: async (parent, args) => {
      return await Author.findById(args.id);
    }
  },

  Book: {
    author: async (parent) => {
      return await Author.findById(parent.authorId);
    }
  },

  Author: {
    books: async (parent) => {
      return await Book.find({ authorId: parent._id });
    }
  },

  Mutation: {
    createAuthor: async (parent, args) => {
      const author = new Author(args);
      return await author.save();
    },
    createBook: async (parent, args) => {
      const book = new Book(args);
      return await book.save();
    }
  }
};
