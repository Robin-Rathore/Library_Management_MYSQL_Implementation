import express from "express";
import cors from "cors"; // Importing cors
import dotenv from 'dotenv';
import { fetchBooks } from "./db.js";
import { loginUser, registerUser } from "./controllers/authController.js";
import { authorize } from "./controllers/roleController.js";
import { AddBooks } from "./routes/books.js";
import { queryDatabase } from "./db.js";
dotenv.config();
const app = express();
// const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods (optional)
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers (optional)
}));


// Enable express to parse JSON
app.use(express.json());

//REGISTER
app.post('/register', registerUser);

app.post('/books', AddBooks);

//LOGIN
app.post('/login', loginUser);

// Protected route for admin
app.get('/admin', authorize(['admin']), (req, res) => {
    res.send('Admin content');
});

// Books route
app.get('/books', async (req, res) => {
    try {
        const books = await fetchBooks();
        console.log(books);
        res.json(books);
    } catch (error) {
        res.status(500).json({message: 'Error fetching books', error: error.message});
    }
});

// Start the server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});
