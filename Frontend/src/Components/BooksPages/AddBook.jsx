import React, { useState } from 'react';
import axios from 'axios';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/books/add`, {
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
            setSubmitMessage(res.data?.message || "Book added successfully!");
        } catch (error) {
            console.error("Unable to add book: " + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>
                <form onSubmit={handleSubmit}>
                    {[
                        { label: 'Book Title', value: title, setValue: setTitle, type: 'text', id: 'title', required: true },
                        { label: 'Author', value: author, setValue: setAuthor, type: 'text', id: 'author', required: true },
                        { label: 'ISBN', value: isbn, setValue: setIsbn, type: 'text', id: 'isbn', required: true },
                        { label: 'Category', value: category, setValue: setCategory, type: 'text', id: 'category', required: true },
                        { label: 'Total Copies', value: total_copies, setValue: setTotal_copies, type: 'number', id: 'total_copies', required: true },
                        { label: 'Available Copies', value: available_copies, setValue: setAvailable_copies, type: 'number', id: 'available_copies', required: true },
                        { label: 'Published Year', value: published_year, setValue: setPublished_year, type: 'number', id: 'published_year', required: true },
                        { label: 'Language', value: language, setValue: setLanguage, type: 'text', id: 'language', required: true },
                        { label: 'Edition', value: edition, setValue: setEdition, type: 'text', id: 'edition' },
                        { label: 'Shelf Location', value: shelf_location, setValue: setShelf_location, type: 'text', id: 'shelf_location' },
                    ].map(({ label, value, setValue, type, id, required }) => (
                        <div key={id} className="relative mb-4">
                            <input
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                type={type}
                                id={id}
                                required={required}
                                className="peer block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500 transition duration-200"
                                placeholder=" "
                            />
                            <label htmlFor={id} className="absolute left-3 top-2.5 text-gray-500 transform transition-all duration-200 ease-in-out peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-purple-500 peer-focus:text-sm">
                                {label}
                            </label>
                        </div>
                    ))}
                    <div className="mb-4">
                        <label htmlFor="book_condition" className="block mb-1 text-gray-700">Condition</label>
                        <select
                            value={book_condition}
                            onChange={(e) => setBook_condition(e.target.value)}
                            id="book_condition"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
                        >
                            <option value="new">New</option>
                            <option value="used">Used</option>
                            <option value="damaged">Damaged</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 transition duration-200">
                        Add Book
                    </button>
                </form>
                {submitMessage && <p className="mt-4 text-center text-green-500">{submitMessage}</p>}
            </div>
        </div>
    );
};

export default AddBook;
