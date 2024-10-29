import React from 'react';
import { motion } from 'framer-motion';

const UpdateBook = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
            <motion.div
                className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="https://img.freepik.com/free-photo/closeup-shot-cute-surprised-fluffy-kitten_181624-46420.jpg?t=st=1730198237~exp=1730201837~hmac=87e825ef61f783ba680d614430a043a8a30b27075dfd9f7cdfb07bed5ad775d3&w=2000" // Placeholder image for the book
                    alt="Under Construction"
                    className="mx-auto mb-4 w-24 h-24 object-cover"
                />
                <h2 className="text-2xl font-semibold text-gray-800">Update Book Page</h2>
                <p className="mt-2 text-gray-600">
                    We're sorry, but the update functionality is not available yet.
                </p>
                <p className="mt-2 text-gray-600">
                    Please check back later for updates!
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg transition duration-200 hover:bg-indigo-500"
                    onClick={() => window.history.back()} // Optional: Go back to the previous page
                >
                    Go Back
                </motion.button>
            </motion.div>
        </div>
    );
};

export default UpdateBook;
