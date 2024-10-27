// src/components/BooksList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/getbooks')
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Library Books Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book, index) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetAllBooks;
