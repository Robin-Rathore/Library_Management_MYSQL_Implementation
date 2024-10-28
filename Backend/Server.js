import express from "express";
import cors from "cors"; // Importing cors
import dotenv from 'dotenv';
import { fetchBooks } from "./db.js";
import { loginUser, registerUser } from "./controllers/authController.js";
import { authorize } from "./controllers/roleController.js";
import { AddBooks, DeleteBook, GetBooks, SearchBook } from "./routes/books.js";
import { queryDatabase } from "./db.js";

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5174', // Allow requests from your frontend
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

// Enable express to parse JSON
app.use(express.json());

// Routes
app.post('/register', registerUser);
app.post('/books/add', AddBooks);
app.delete('/books/delete', DeleteBook); 
app.post('/login', loginUser);
app.get('/getbooks', GetBooks);
app.get('/searchbooks', SearchBook);

// Start the server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});
