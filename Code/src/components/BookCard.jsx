import React from 'react';
import { motion } from 'framer-motion';

function BookCard({ book, onClick, index = 0 }) {
  return (
    <motion.div
      className="card cursor-pointer group"
      onClick={() => onClick(book)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
        <p className="text-gray-light text-sm line-clamp-3">
          {book.description}
        </p>
        <div className="mt-4">
          <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
            Group {book.groupId}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default BookCard;