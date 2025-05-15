import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { addSingleBook } from '../graphql-client/mutations';
import { getAuthors, getBooks } from '../graphql-client/queries';

const BookForm = () => {
  const [newBook, setNewBook] = useState({
    name: '',
    genre: '',
    authorId: ''
  });

  const { name, genre, authorId } = newBook;

  const { loading, data } = useQuery(getAuthors);

  const [addBook] = useMutation(addSingleBook);

  const onInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooks }]
    });
    setNewBook({ name: '', genre: '', authorId: '' });
  };

  return (
    <Form
      className='mb-3'
      onSubmit={onSubmit}
    >
      <Form.Group>
        <Form.Label>Book Form</Form.Label>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Book name'
          name='name'
          onChange={onInputChange}
          value={name}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Book genre'
          name='genre'
          onChange={onInputChange}
          value={genre}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        {loading ? (
          <p>Loading authors...</p>
        ) : (
          <Form.Control
            as='select'
            name='authorId'
            onChange={onInputChange}
            value={authorId}
            required
          >
            <option
              value=''
              disabled
            >
              Select author
            </option>
            {(data?.authors ?? []).map((author) => (
              <option
                key={author.id}
                value={author.id}
              >
                {author.name}
              </option>
            ))}
          </Form.Control>
        )}
      </Form.Group>
      <Button
        className='float-right'
        type='submit'
        variant='dark'
      >
        Add Book
      </Button>
    </Form>
  );
};

export default BookForm;
