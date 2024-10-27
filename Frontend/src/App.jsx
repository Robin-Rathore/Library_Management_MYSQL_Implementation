import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Components/Authpages/Register'
import Login from './Components/Authpages/Login'
import AddBook from './Components/BooksPages/AddBook'
import DeleteBook from './Components/BooksPages/DeleteBook'
import GetAllBooks from './Components/BooksPages/GetAllBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
      {/* <Register/>   */}

      {/* <AddBook/> */}
      {/* <DeleteBook/> */}

      <GetAllBooks/>
    </>
  )
}

export default App
