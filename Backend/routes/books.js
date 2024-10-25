import { queryDatabase } from "../db.js";

//1. Add a new Books
export const AddBooks = async (req, res) => {

    const { title, author, isbn, category, total_copies, available_copies, published_year, language, edition, book_condition, shelf_location } = req.body;

    try{
        const query = `INSERT INTO books (title, author, isbn, category, total_copies, available_copies, published_year, language, edition, book_condition, shelf_location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        await queryDatabase(query, [title, author, isbn, category, total_copies, available_copies, published_year, language, edition, book_condition, shelf_location]);
        res.status(201).json({message: 'Book Added Sucessfully'});
    } catch(error) {
        res.status(500).json({ error: 'Failed to add book'});
    }
};