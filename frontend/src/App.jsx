import { useEffect, useState } from 'react'
import backendUrl from '../config/config.js';
import './App.css'

function App() {
  const [books, setBooks] = useState([]);

  useEffect( () => {
    console.log("URL, die für fetch verwendet wird", backendUrl)
    // try catch wäre gut ;) 
    const fetchBooks = async () => {

      const response = await fetch(`${backendUrl}/books`);
      const data = await response.json();
      setBooks(data)
    }
    fetchBooks();

  }, []);

  return (
    <>
      <h1>Tolle Bücher!!</h1>
      <ul>
        {books.map( book => {
          return <li key={ book.id }> { book.title } von { book.author }</li>
        })}
      </ul>
    </>
  )
}

export default App