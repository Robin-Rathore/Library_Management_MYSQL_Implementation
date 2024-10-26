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

//2. Delete a Book Entry

export const DeleteBook = async (req, res) => {
    const { title, author, isbn } = req.query;
    console.log("title : "+title, "author : "+author, "isbn : "+isbn);
    try {
        // Use OR to allow matching any of the fields
        const findBookQuery = "SELECT book_id FROM books WHERE title = ? AND author = ? AND isbn = ? LIMIT 1";
        const result = await queryDatabase(findBookQuery, [title, author, isbn]);

        console.log("result: ", result); // Check what result you get

        if (result.length === 0) {
            return res.status(404).json({ message: "Book Not Found" });
        }

        const bookId = result[0].book_id;

        const deleteQuery = 'DELETE FROM fines WHERE borrow_id IN (SELECT borrow_id FROM borrowinghistory WHERE book_id = ?)';
        await queryDatabase(deleteQuery, [bookId]);

        const deleteBookQuery = 'DELETE FROM books WHERE book_id = ?';
        await queryDatabase(deleteBookQuery, [bookId]);

        res.status(200).json({ message: "Book Deleted Successfully" });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Error deleting the book' });
    }
};

