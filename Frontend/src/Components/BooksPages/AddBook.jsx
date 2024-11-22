import axios from 'axios';
import React, { useState } from 'react';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [category, setCategory] = useState('');
    const [total_copies, setTotal_copies] = useState(0);
    const [available_copies, setAvailable_copies] = useState(0);
    const [published_year, setPublished_year] = useState(2020);
    const [language, setLanguage] = useState('English');
    const [book_condition, setBook_condition] = useState('new');
    const [shelf_location, setShelf_location] = useState('');
    const [edition, setEdition] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://librarysystembackend-production.up.railway.app/books/add`, {
                title,
                author,
                isbn,
                category,
                total_copies,
                available_copies,
                published_year,
                language,
                book_condition,
                shelf_location,
                edition,
            });
            if (res.data && res.data.message) {
                setSubmitMessage(res.data.message);
            } else {
                setSubmitMessage("Book added successfully!"); // Fallback message
            }
        } catch (error) {
            console.log("Unable to Add book " + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add a New Book</h2>
                {submitMessage && <p className="mb-4 text-center text-green-600">{submitMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-semibold">Title</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            required
                            id="title"
                            className={`mt-2 p-2 w-full border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="author" className="block text-gray-700 font-semibold">Author</label>
                        <input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                            id="author"
                            required
                            className={`mt-2 p-2 w-full border rounded ${errors.author ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="isbn" className="block text-gray-700 font-semibold">ISBN</label>
                        <input
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)}
                            type="text"
                            id="isbn"
                            required
                            className={`mt-2 p-2 w-full border rounded ${errors.isbn ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700 font-semibold">Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            id="category"
                            required
                            className={`mt-2 p-2 w-full border rounded ${errors.category ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="total_copies" className="block text-gray-700 font-semibold">Total Copies</label>
                        <input
                            type="number"
                            value={total_copies}
                            onChange={(e) => setTotal_copies(e.target.value)}
                            required
                            id="total_copies"
                            className={`mt-2 p-2 w-full border rounded ${errors.total_copies ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.total_copies && <p className="text-red-500 text-sm">{errors.total_copies.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="available_copies" className="block text-gray-700 font-semibold">Available Copies</label>
                        <input
                            value={available_copies}
                            onChange={(e) => setAvailable_copies(e.target.value)}
                            type="number"
                            id="available_copies"
                            required
                            className={`mt-2 p-2 w-full border rounded ${errors.available_copies ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.available_copies && <p className="text-red-500 text-sm">{errors.available_copies.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="published_year" className="block text-gray-700 font-semibold">Published Year</label>
                        <input
                            value={published_year}
                            onChange={(e) => setPublished_year(e.target.value)}
                            type="number"
                            required
                            id="published_year"
                            className={`mt-2 p-2 w-full border rounded ${errors.published_year ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.published_year && <p className="text-red-500 text-sm">{errors.published_year.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="language" className="block text-gray-700 font-semibold">Language</label>
                        <input
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            type="text"
                            required
                            id="language"
                            className={`mt-2 p-2 w-full border rounded ${errors.language ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.language && <p className="text-red-500 text-sm">{errors.language.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="edition" className="block text-gray-700 font-semibold">Edition</label>
                        <input
                            value={edition}
                            onChange={(e) => setEdition(e.target.value)}
                            type="text"
                            id="edition"
                            className={`mt-2 p-2 w-full border rounded ${errors.edition ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="book_condition" className="block text-gray-700 font-semibold">Condition</label>
                        <select
                            value={book_condition}
                            onChange={(e) => setBook_condition(e.target.value)}
                            id="book_condition"
                            required
                            className={`mt-2 p-2 w-full border rounded ${errors.book_condition ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        >
                            <option value="">Select condition</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                            <option value="damaged">Damaged</option>
                        </select>
                        {errors.book_condition && <p className="text-red-500 text-sm">{errors.book_condition.message}</p>}
                    </div>

                    <div className="mb-4">
                    <label htmlFor="shelf_location" className="block text-gray-700 font-semibold">
                            Shelf Location
                        </label>
                        <input
                            value={shelf_location}
                            onChange={(e) => setShelf_location(e.target.value)}
                            type="text"
                            id="shelf_location"
                            className={`mt-2 p-2 w-full border rounded ${errors.shelf_location ? 'border-red-500' : 'border-gray-300'} transition duration-300 ease-in-out focus:border-blue-500`}
                        />
                        {errors.shelf_location && <p className="text-red-500 text-sm">{errors.shelf_location.message}</p>}
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
