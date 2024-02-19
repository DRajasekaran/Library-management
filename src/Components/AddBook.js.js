import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { userContext, BookContext } from '../Context/ContextComponent';
import { useNavigate } from 'react-router-dom';

export const bookSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  genre: yup.string().required('Genre is required'),
});

function AddBook() {
  const context = useContext(userContext);
  const bookContextData  = useContext(BookContext);
  const { books, setBooks } = bookContextData; 
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const initialValues = {
    title: '',
    author: '',
    genre: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newBook = {
      title: values.title,
      author: values.author,
      genre: values.genre,
    };
    console.log('books', books)
    console.log('newBook', newBook)
    setBooks([...books, newBook]);
    console.log('books', books)
    
    setSuccessMessage('Book added successfully!');
    alert('Book added successfully!');
    resetForm();

    navigate('/bookslist');
  };

  return (
    <>
      
    <div className="add-book-container">
    <div className="add-book-form">
    <h2 style={{ textAlign: 'center', marginTop:'2%'}}>Add New Book</h2>
    <Formik
        initialValues={initialValues}
        validationSchema={bookSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              className="form-control"
            />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <Field
              type="text"
              id="author"
              name="author"
              className="form-control"
            />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <Field
              type="text"
              id="genre"
              name="genre"
              className="form-control"
            />
            <ErrorMessage name="genre" component="div" className="error" />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </Form>
      </Formik>
    </div>
    </div>
      {successMessage && <div className="success">{successMessage}</div>}
    </>
  );
}

export default AddBook;
