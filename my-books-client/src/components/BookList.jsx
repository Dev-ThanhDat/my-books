import { useQuery } from '@apollo/client';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getBooks } from '../graphql-client/queries';
import BookDetails from './BookDetails';

const BookList = () => {
  const [bookSelected, setBookSelected] = useState(null);

  const { loading, error, data } = useQuery(getBooks);

  if (loading) return <p>Loading books....</p>;

  if (error) return <p>Error loading books!</p>;

  return (
    <Row>
      <Col
        xs={12}
        md={8}
      >
        <Row className='g-3'>
          {data?.books?.map((book) => (
            <Col
              key={book.id}
              xs={12}
              md={4}
            >
              <Card
                className={`text-center shadow${
                  bookSelected === book.id ? ' border-primary' : ''
                }`}
                style={{ cursor: 'pointer' }}
                onClick={() => setBookSelected(book.id)}
              >
                <Card.Body>{book.name}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      <Col>
        <BookDetails bookId={bookSelected} />
      </Col>
    </Row>
  );
};

export default BookList;
