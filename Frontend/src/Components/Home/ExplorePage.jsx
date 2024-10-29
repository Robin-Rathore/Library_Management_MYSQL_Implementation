// src/components/ExplorePage.js
import React from 'react';
import SearchBooks from '../BooksPages/SearchBooks';
import { Link } from 'react-router-dom';

const ExplorePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 h-120">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://img.freepik.com/free-photo/portrait-beautiful-woman-reading-book_23-2148464509.jpg?uid=R100616680&ga=GA1.1.1754053921.1708144974&semt=ais_hybrid')" }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-[30rem] text-white text-center px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
    Explore Our Collection
  </h1>
  <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-md sm:max-w-lg lg:max-w-xl">
    Find your next great read and expand your horizons.
  </p>
</div>

      </section>
      
    {/* //   </section> */} 
    <div className="flex flex-col items-center mt-[50px]">
          <h2 className="text-4xl font-bold mb-6 sm:p-[15px]">What are you looking for?</h2>
          <p className="text-lg mb-4 text-justify sm:p-[15px]">
            Whether you want to discover a new author, dive into a genre, or find a classic, our library offers an extensive range of books just for you. Start your journey today!
          </p>
          <SearchBooks/>
          </div>
      {/* Books Section */}

      {/* Authentication Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Join Our Community</h2>
        <p className="text-lg mb-8 text-center">
          Sign up to gain access to exclusive resources, book recommendations, and community events. 
          Join us in our journey of exploration and discovery!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link to={"/login"} className="bg-blue-600 flex items-center justify-center text-white sm:w-[150px] px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300">
            Login
          </Link>
          <Link to={"/register"} className="bg-gray-300 text-blue-600 flex items-center justify-center  sm:w-[150px] px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300">
            Sign Up
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6 mb-[-25px]">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Library. All rights reserved.</p>
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/Robin-Rathore" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
            <a href="https://x.com/RobinRathore007?t=dpFo9K94CJGtm3Tb7gVK0Q&s=09" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
            <a href="https://instagram.com/robin_rathore0?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/robin-rathore-833863238" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExplorePage;
