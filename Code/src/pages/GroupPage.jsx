import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getGroupById } from '../data/booksData';
import BookCard from '../components/BookCard';
import BookModal from '../components/BookModal';

function GroupPage() {
  const { groupId } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const group = getGroupById(groupId);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Group Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-sm bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white">Group {group.id}</span>
            </nav>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {group.title}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-secondary px-4 py-2 rounded-full text-white font-medium">
                    {group.ageRange}
                  </span>
                  <span className="text-white/80">
                    {group.books.length} books available
                  </span>
                </div>
                <p className="text-xl text-white/90 mb-6">
                  {group.description}
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/80">
                    <strong>Recommended Duration:</strong> {group.duration}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img
                  src={group.image}
                  alt={group.title}
                  className="max-w-md w-full rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="section bg-bg">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Books in This Collection
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Each book is carefully designed to support development at this specific age range
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {group.books.map((book, index) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={handleBookClick}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Book Modal */}
      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default GroupPage;