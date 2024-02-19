import React, { useState } from 'react';

export const userContext = React.createContext();
export const BookContext = React.createContext();

function ContextComponent({ children }) {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [books, setBooks] = useState([
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
    },
    {
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
    },
    {
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
    }
    // Add more book objects as needed
  ]);

  return (
    <div>
      <userContext.Provider value={{ students, setStudents, teachers, setTeachers }}>
        <BookContext.Provider value={{ books, setBooks }}>
          {children}
        </BookContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default ContextComponent;
