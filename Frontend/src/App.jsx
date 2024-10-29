import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Authpages/Register';
import Login from './Components/Authpages/Login';
import AddBook from './Components/BooksPages/AddBook';
import DeleteBook from './Components/BooksPages/DeleteBook';
import GetAllBooks from './Components/BooksPages/GetAllBooks';
import SearchBooks from './Components/BooksPages/SearchBooks';
import ExplorePage from './Components/Home/ExplorePage';
import Home from './Components/Home/home';
import UpdateBook from './Components/BooksPages/UpdateBooks';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/delete-book" element={<DeleteBook />} />
        <Route path="/update-book" element={<UpdateBook />} />
        <Route path="/get-all-books" element={<GetAllBooks />} />
        <Route path="/search-books" element={<SearchBooks />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
