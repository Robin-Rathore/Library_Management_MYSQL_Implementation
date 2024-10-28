// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/smiley-woman-reading-living-room_23-2148821607.jpg')",
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Your Library</h1>
          <p className="text-lg mb-8">
            Discover a world of knowledge, adventure, and creativity.
          </p>
          <Link
            to={"/explore"}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 flex flex-col md:flex-row items-center justify-between container mx-auto px-6">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Dive Into Your Next Adventure
          </h2>
          <p className="text-lg mb-6">
            Our library is not just a place to borrow books. It's a sanctuary
            for those who seek knowledge, inspiration, and a bit of magic in
            their lives. Whether you're looking to escape into a fantasy world
            or dive deep into non-fiction, we have something for everyone.
          </p>
          <Link
            to={"/explore"}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
          >
            Learn More
          </Link>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://img.freepik.com/free-photo/young-man-reading-living-room_23-2148821608.jpg?t=st=1730131595~exp=1730135195~hmac=d84a5eec03007a934bbbdaafdf270f48007da67f37789fb7170b6438dd73d09d&w=1800"
            alt="Girl Reading a Book"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-photo/woman-reading-books-near-old-bookcase_23-2147797427.jpg?t=st=1730133065~exp=1730136665~hmac=5053c4bdbb852f692db29929b5bad33a03bfcc77c36109dc977a89b09d750257&w=2000')",
                }}
              ></div>
              <div className="relative z-10 p-4">
                <h3 className="text-xl font-semibold mb-2 text-white shadow-md">
                  Extensive Collection
                </h3>
                <p className="text-gray-200 shadow-md">
                  Explore thousands of books from various genres and authors,
                  ensuring there's something for everyone.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-photo/crop-woman-near-stack-books_23-2147797443.jpg?t=st=1730133153~exp=1730136753~hmac=72dd08efd644f8d928fc22ecbac565f80cee748ab2e682171c9eaa4974c28cf5&w=2000')",
                }}
              ></div>
              <div className="relative z-10 p-4">
                <h3 className="text-xl font-semibold mb-2 text-white shadow-md">
                  User-Friendly Interface
                </h3>
                <p className="text-gray-200 shadow-md">
                  Enjoy a seamless and intuitive experience while browsing and
                  finding your next favorite read.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-photo/high-angle-boy-library-reading_23-2148469932.jpg?t=st=1730133226~exp=1730136826~hmac=15333bab83e17d54a99c5ce9fad6477274e2f8361654ace0e26a66d95ebd91d9&w=2000')",
                }}
              ></div>
              <div className="relative z-10 p-4">
                <h3 className="text-xl font-semibold mb-2 text-white shadow-md">
                  Expert Guidance
                </h3>
                <p className="text-gray-200 shadow-md">
                  Get personalized recommendations from our knowledgeable staff
                  to find the perfect book for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Featured Books
          </h2>
          <div className="flex flex-wrap justify-center">
            {/* Featured books data */}
            {[
              {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                image:
                  "https://m.media-amazon.com/images/I/81QuEGw8VPL._SL1500_.jpg",
              },
              {
                title: "1984",
                author: "George Orwell",
                image:
                  "https://m.media-amazon.com/images/I/71rpa1-kyvL._SL1500_.jpg",
              },
              {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                image:
                  "https://m.media-amazon.com/images/I/81JYG8sqRsL._SL1500_.jpg",
              },
              {
                title: "Pride and Prejudice",
                author: "Jane Austen",
                image:
                  "https://m.media-amazon.com/images/I/41xCxs0B+cL._SL1500_.jpg",
              },
            ].map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-64 h-[25rem] transition-transform transform hover:scale-105"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[20rem]"
                />
                <div className="p-4 flex flex-col justify-between h-[5rem]">
                  <h3 className="text-xl font-bold text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-gray-600">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <p className="italic">
                "An amazing library with a fantastic collection of books!"
              </p>
              <p className="mt-4 font-bold">- Robin Rathore</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <p className="italic">
                "The staff is incredibly helpful and knowledgeable."
              </p>
              <p className="mt-4 font-bold">- Mayank Chandel</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <p className="italic">"A peaceful place to read and study!"</p>
              <p className="mt-4 font-bold">- Ananya Briscoe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6 mb-[-25px]">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Library. All rights reserved.
          </p>
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/Robin-Rathore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://x.com/RobinRathore007?t=dpFo9K94CJGtm3Tb7gVK0Q&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/robin_rathore0?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/robin-rathore-833863238"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
