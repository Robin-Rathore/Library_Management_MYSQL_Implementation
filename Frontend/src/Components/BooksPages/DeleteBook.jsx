import axios from 'axios';
import React, { useState } from 'react';

const DeleteBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const res = await axios.delete(`https://librarysystembackend-production.up.railway.app/books/delete`, {
                params: {
                    title,
                    author,
                    isbn
                }
            });
            if (res.data && res.data.message) {
                setSubmitMessage(res.data.message);
            } else {
                setSubmitMessage("Book deleted successfully!"); // Fallback message
            }
            setTitle('');
            setAuthor('');
            setIsbn('');
        } catch (error) {
            console.log("Unable to delete book.: " + error.message);
            setSubmitMessage("Failed to delete the book");
        }
    };
    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Delete a Book</h2>
            {submitMessage && <p className="mb-4 text-center text-green-600">{submitMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        required
                        id="title"
                        className={`mt-2 p-2 w-full border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="author" className="block text-gray-700">Author</label>
                    <input
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        required
                        id="author"
                        className={`mt-2 p-2 w-full border rounded ${errors.author ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="isbn" className="block text-gray-700">ISBN</label>
                    <input
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        type="text"
                        required
                        id="isbn"
                        className={`mt-2 p-2 w-full border rounded ${errors.isbn ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300">
                    Delete Book
                </button>
            </form>
        </div>
    );
};

export default DeleteBook;
