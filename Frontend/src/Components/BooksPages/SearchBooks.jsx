import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);

    // Fetch books from the backend when the component mounts
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/searchbooks?searchTerm=${searchTerm}`);
                setBooks(response.data);
                setFilteredBooks(response.data); // Initially display all books
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [searchTerm]); // Fetch books whenever searchTerm changes

    // Update filtered books whenever search term changes
    useEffect(() => {
        if (searchTerm === "") {
            setFilteredBooks(books);
        } else {
            setFilteredBooks(
                books.filter(book =>
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, books]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
                    Library Book Search
                </h2>

                {/* Search Bar */}
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search by title or author..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/2 px-4 py-2 border border-indigo-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>

                {/* Book Display Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-gray-800">{book.title}</h3>
                                <p className="text-gray-600 mt-1">by {book.author}</p>
                                <div className="my-4">
                                    <p className="text-gray-500"><span className="font-bold">Category:</span> {book.category}</p>
                                    <p className="text-gray-500"><span className="font-bold">Published:</span> {book.published_year}</p>
                                    <p className="text-gray-500"><span className="font-bold">Edition:</span> {book.edition}</p>
                                    <p className="text-gray-500"><span className="font-bold">Condition:</span> {book.book_condition}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <p className={`text-sm font-medium px-3 py-1 rounded-full ${book.availability_status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                        {book.availability_status}
                                    </p>
                                    <p className="text-gray-500"><span className="font-bold">Shelf:</span> {book.shelf_location}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-gray-500"><span className="font-bold">Total Copies:</span> {book.total_copies}</p>
                                    <p className="text-gray-500"><span className="font-bold">Available:</span> {book.available_copies}</p>
                                </div>
                            </div>
                        ))) : (
                        <p className="text-center text-gray-500 text-xl">No books found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBooks;
