import Container from 'react-bootstrap/Container';
import BookList from './components/BookList';
import { Forms } from './components/Forms';

function App() {
  return (
    <>
      <Container className='py-3 mt-3 bg-light'>
        <h1 className='text-center mb-3'>My Books</h1>
        <hr />
        <Forms />
        <hr />
        <BookList />
      </Container>
    </>
  );
}

export default App;
