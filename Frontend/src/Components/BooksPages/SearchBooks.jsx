import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [showAll, setShowAll] = useState(false);

    console.log(process.env.REACT_APP_BASE_URL)

    // Fetch books from the backend when the component mounts
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}searchbooks?searchTerm=${searchTerm}`);
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
            setFilteredBooks(showAll ? books : books.slice(0, 8));
        } else {
            setFilteredBooks(
                books.filter(book =>
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, books, showAll]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 py-10 px-5 w-full">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-extrabold text-center text-indigo-700 mb-12">
                    Explore Your Library
                </h2>

                {/* Search Bar */}
                <div className="flex justify-center mb-12">
                    <input
                        type="text"
                        placeholder="🔍 Search by title or author..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/2 px-4 py-3 border border-indigo-400 rounded-lg shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Book Display Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
                            >
                                {/* Background Overlay */}
                                <div
                                    className="absolute inset-0 rounded-lg bg-cover bg-center opacity-20"
                                    style={{ backgroundImage: `url('https://img.freepik.com/free-photo/stack-books-library_23-2148221501.jpg')` }}
                                ></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-indigo-700 mb-2">{book.title}</h3>
                                    <p className="text-gray-700 mb-4 italic">by {book.author}</p>
                                    <div className="my-3 space-y-2">
                                        <p className="text-gray-600"><span className="font-semibold">Category:</span> {book.category}</p>
                                        <p className="text-gray-600"><span className="font-semibold">Published:</span> {book.published_year}</p>
                                        <p className="text-gray-600"><span className="font-semibold">Edition:</span> {book.edition}</p>
                                        <p className="text-gray-600"><span className="font-semibold">Condition:</span> {book.book_condition}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${book.availability_status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                            {book.availability_status}
                                        </span>
                                        <span className="text-gray-600"><strong>Shelf:</strong> {book.shelf_location}</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-4 text-gray-600">
                                        <p><strong>Total Copies:</strong> {book.total_copies}</p>
                                        <p><strong>Available:</strong> {book.available_copies}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 text-2xl">No books found</p>
                    )}
                </div>

                {/* Show All Button */}
                {searchTerm === "" && books.length > 12 && !showAll && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-lg font-bold shadow-lg hover:bg-indigo-700 transition-all"
                        >
                            Show All Books
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBooks;
