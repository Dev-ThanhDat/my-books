import { gql } from '@apollo/client';

export const addSingleBook = gql`
  mutation addSingleBookMutation(
    $name: String
    $genre: String
    $authorId: ID!
  ) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export const addSingleAuthor = gql`
  mutation addSingleAuthorMutation($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
    }
  }
`;
