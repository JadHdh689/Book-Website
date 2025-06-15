import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBookById, getGroupById } from '../data/booksData';
import Flipbook from '../components/Flipbook';

function BookDetailPage() {
  const { groupId, bookId } = useParams();
  const book = getBookById(groupId, bookId);
  const group = getGroupById(groupId);

  if (!book || !group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // Prepare all available materials for display
  const materials = [
    { name: 'Cover', image: book.cover, available: true },
    { name: 'Story', image: book.materials?.story, available: !!book.materials?.story },
    { name: 'Activity', image: book.materials?.activity, available: !!book.materials?.activity },
    { name: 'Guide', image: book.materials?.guide, available: !!book.materials?.guide },
    { name: 'Certificate', image: book.materials?.certificate, available: !!book.materials?.certificate },
    { name: 'Stickers', image: book.materials?.stickers, available: !!book.materials?.stickers }
  ];

  // Prepare flipbook images (first 4 available materials)
  const flipbookImages = materials
    .filter(material => material.available)
    .slice(0, 4)
    .map(material => material.image);

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container">
          <nav className="text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link 
              to={`/groups/${groupId}`} 
              className="text-gray-500 hover:text-primary transition-colors"
            >
              {group.title}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-dark">{book.title}</span>
          </nav>
        </div>
      </section>

      {/* Book Details */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Flipbook */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Flipbook images={flipbookImages} />
            </motion.div>

            {/* Right Column - Book Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <Link
                  to={`/groups/${groupId}`}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-4"
                >
                  ← Back to {group.title}
                </Link>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark">
                  {book.title}
                </h1>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                    {group.ageRange}
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
                    Group {group.id}
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-light leading-relaxed">
                  {book.description}
                </p>
              </div>

              {/* Materials Grid */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-dark">
                  Available Materials
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {materials.map((material) => (
                    <div
                      key={material.name}
                      className={`p-4 rounded-lg border-2 text-center transition-colors ${
                        material.available
                          ? 'border-primary/20 bg-primary/5 text-primary'
                          : 'border-gray-200 bg-gray-50 text-gray-400'
                      }`}
                    >
                      <div className="text-2xl mb-2">
                        {material.available ? '✓' : '○'}
                      </div>
                      <div className="font-medium text-sm">
                        {material.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-gray-dark">
                  About {group.title}
                </h3>
                <p className="text-gray-light mb-4">
                  {group.description}
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Recommended Duration:</strong> {group.duration}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Books */}
      <section className="section bg-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Other Books in {group.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {group.books
                .filter(b => b.id !== book.id)
                .slice(0, 4)
                .map((relatedBook) => (
                  <Link
                    key={relatedBook.id}
                    to={`/groups/${groupId}/books/${relatedBook.id}`}
                    className="card group block"
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={relatedBook.cover}
                        alt={relatedBook.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {relatedBook.title}
                      </h3>
                      <p className="text-gray-light text-sm line-clamp-2">
                        {relatedBook.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
            
            {group.books.length > 5 && (
              <div className="text-center mt-8">
                <Link
                  to={`/groups/${groupId}`}
                  className="btn btn-outline"
                >
                  View All Books in {group.title}
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BookDetailPage;