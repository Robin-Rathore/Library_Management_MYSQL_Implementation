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
        try{
            const res = axios.post('http://localhost:3000/books/add', {
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
                edition
            });
            if (res.data && res.data.message) {
                setSubmitMessage(res.data.message);
            } else {
                setSubmitMessage("Book added successfully!"); // Fallback message
            }
        }catch(error) {
            console.log("Unable to Add book " + error.message);
        }
    }

    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add a New Book</h2>
            {submitMessage && <p className="mb-4 text-center text-green-600">{submitMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        required ='Title is required'
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
                        id="author"
                        required ='Author is required'
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
                        id="isbn"
                        required ='ISBN is required'
                        className={`mt-2 p-2 w-full border rounded ${errors.isbn ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700">Category</label>
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        id="category"
                        required ='Category is required'
                        className={`mt-2 p-2 w-full border rounded ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="total_copies" className="block text-gray-700">Total Copies</label>
                    <input
                        type="number"
                        value={total_copies}
                        onChange={(e) => setTotal_copies(e.target.value)}
                        required ='Total copies are required'
                        id="total_copies"
                        className={`mt-2 p-2 w-full border rounded ${errors.total_copies ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.total_copies && <p className="text-red-500 text-sm">{errors.total_copies.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="available_copies" className="block text-gray-700">Available Copies</label>
                    <input
                        value={available_copies}
                        onChange={(e) => setAvailable_copies(e.target.value)}
                        type="number"
                        id="available_copies"
                        required = 'Available copies are required'
                        className={`mt-2 p-2 w-full border rounded ${errors.available_copies ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.available_copies && <p className="text-red-500 text-sm">{errors.available_copies.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="published_year" className="block text-gray-700">Published Year</label>
                    <input
                        value={published_year}
                        onChange={(e) => setPublished_year(e.target.value)}
                        type="number"
                        required = "Publisehd Year is Required"
                        id="published_year"
                        className={`mt-2 p-2 w-full border rounded ${errors.published_year ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.published_year && <p className="text-red-500 text-sm">{errors.published_year.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="language" className="block text-gray-700">Language</label>
                    <input
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        type="text"
                        required = 'Language is required' 
                        id="language"
                        className={`mt-2 p-2 w-full border rounded ${errors.language ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.language && <p className="text-red-500 text-sm">{errors.language.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="edition" className="block text-gray-700">Edition</label>
                    <input
                        value={edition}
                        onChange={(e) => setEdition(e.target.value)}
                        type="text"
                        id="edition"
                        className="mt-2 p-2 w-full border rounded border-gray-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="book_condition" className="block text-gray-700">Condition</label>
                    <select
                        value={book_condition}
                        onChange={(e) => setBook_condition(e.target.value)}
                        id="book_condition"
                        required = 'Book condition is required'
                        className={`mt-2 p-2 w-full border rounded ${errors.book_condition ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Select condition</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                        <option value="damaged">Damaged</option>
                    </select>
                    {errors.book_condition && <p className="text-red-500 text-sm">{errors.book_condition.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="shelf_location" className="block text-gray-700">Shelf Location</label>
                    <input
                        value={shelf_location}
                        onChange={(e) => setShelf_location(e.target.value)}
                        type="text"
                        id="shelf_location"
                        className="mt-2 p-2 w-full border rounded border-gray-300"
                    />
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
