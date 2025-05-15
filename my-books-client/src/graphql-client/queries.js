import { gql } from '@apollo/client';

export const getBooks = gql`
  query getBooksQuery {
    books {
      name
      id
    }
  }
`;

export const getSingleBook = gql`
  query getSingleBookQuery($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export const getAuthors = gql`
  query getAuthorsQuery {
    authors {
      id
      name
    }
  }
`;
