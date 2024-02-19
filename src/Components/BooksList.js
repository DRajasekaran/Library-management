import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BookContext } from '../Context/ContextComponent';

function BooksList() {
  const { books, addBook } = useContext(BookContext);

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    addBook(updatedBooks);
  };

  return (
    <>
    <div className="books-list-container">
    <Link to="/addbook" className="add-book-button">
        <Button variant="primary" size="lg">
          Add New Book
        </Button>
      </Link>

      <div className="card-container">
        {books.map((book, index) => (
          <Card
            className="text-align"
            border="primary"
            style={{ width: '18rem', flexBasis: '30%', marginBottom: '30px' }}
            key={index}
          >
            <Card.Header>
              <h3 className="">{book.title}</h3>
            </Card.Header>
            <Card.Body>
              <div className="contents">
                <Card.Text>
                  <b>Author: </b>
                  {book.author}
                </Card.Text>
                <Card.Text>
                  <b>Genre: </b>
                  {book.genre}
                </Card.Text>
              </div>
              <div className="m-3">
                <Button variant="primary">
                  <i className="fa-solid fa-pen"></i>
                </Button>
                &nbsp; &nbsp;
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>


      
      </div>
    </>
  );
}

export default BooksList;
