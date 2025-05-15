import { useMutation } from '@apollo/client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addSingleAuthor } from '../graphql-client/mutations';
import { getAuthors } from '../graphql-client/queries';

const AuthorForm = () => {
  const [newAuthor, setNewAuthor] = useState({
    name: '',
    age: ''
  });

  const { name, age } = newAuthor;

  const [addAuthor] = useMutation(addSingleAuthor);

  const onInputChange = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addAuthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query: getAuthors }]
    });

    setNewAuthor({ name: '', age: '' });
  };

  return (
    <Form
      className='mb-3'
      onSubmit={onSubmit}
    >
      <Form.Group>
        <Form.Label>Author Form</Form.Label>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Author name'
          name='name'
          onChange={onInputChange}
          value={name}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          type='number'
          placeholder='Author age'
          name='age'
          onChange={onInputChange}
          value={age}
          required
        />
      </Form.Group>
      <Button
        className='float-right'
        type='submit'
        variant='dark'
      >
        Add Author
      </Button>
    </Form>
  );
};

export default AuthorForm;
