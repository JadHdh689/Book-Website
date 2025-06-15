import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllGroups, getAllBlogs } from '../data/booksData';
import BookModal from '../components/BookModal';

function HomePage() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const groups = getAllGroups();
  const blogs = getAllBlogs();

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Images/Hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Toolkit for
            <br />
            <span className="text-secondary">Emotional Growth</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive resources for psychological well-being across all ages, 
            from early childhood to adulthood.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#groups" className="btn btn-primary text-lg px-8 py-3">
              Explore Books
            </a>
            <a href="#video" className="btn btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-dark">
              Watch Video
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section id="video" className="section bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Discover Our Approach
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="MySmartKit Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Groups Section */}
      <section id="groups" className="section bg-bg">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Collections by Age Group
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Carefully curated resources designed for specific developmental stages, 
              from early childhood through adulthood.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/groups/${group.id}`}
                  className="card group block h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                        {group.title}
                      </h3>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {group.ageRange}
                      </span>
                    </div>
                    <p className="text-gray-light mb-4">
                      {group.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-light">
                        {group.books.length} books
                      </span>
                      <span className="text-primary font-medium group-hover:text-secondary transition-colors">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Books
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Discover some of our most popular and impactful resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {groups.slice(0, 2).map((group) =>
              group.books.slice(0, 2).map((book, index) => (
                <motion.div
                  key={book.id}
                  className="card cursor-pointer group"
                  onClick={() => handleBookClick(book)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-gray-light text-sm line-clamp-2">
                      {book.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        Group {book.groupId}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section bg-bg">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Expert guidance and practical tips for emotional development across all ages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/blogs/${blog.id}`}
                  className="card group block h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {blog.ageRange}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <h4 className="font-medium text-gray-dark mb-3">
                      {blog.subtitle}
                    </h4>
                    <p className="text-gray-light line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="text-primary font-medium group-hover:text-secondary transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
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

export default HomePage;