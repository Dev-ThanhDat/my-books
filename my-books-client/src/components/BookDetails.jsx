import { useQuery } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import { getSingleBook } from '../graphql-client/queries';

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getSingleBook, {
    variables: {
      id: bookId
    },
    skip: bookId === null
  });

  if (loading) return <p>Loading book details...</p>;

  if (error) return <p>Error book details!</p>;

  const book = bookId !== null ? data.book : null;

  return (
    <Card className='shadow'>
      <Card.Body>
        {book === null ? (
          <Card.Text>Please select a book</Card.Text>
        ) : (
          <>
            <Card.Title>{book?.name}</Card.Title>
            <Card.Subtitle>{book?.genre}</Card.Subtitle>
            <p>{book?.author?.name}</p>
            <p>Age: {book?.author?.age}</p>
            <p>All books by this author</p>
            <ul>
              {book?.author?.books?.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
