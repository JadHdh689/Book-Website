import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Flipbook({ images = [] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoFlipping, setIsAutoFlipping] = useState(true);

  // Auto-flip the first page after 2 seconds
  useEffect(() => {
    if (isAutoFlipping && images.length > 1) {
      const timer = setTimeout(() => {
        setCurrentPage(1);
        setIsAutoFlipping(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isAutoFlipping, images.length]);

  const nextPage = () => {
    if (currentPage < images.length - 1) {
      setCurrentPage(currentPage + 1);
      setIsAutoFlipping(false);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setIsAutoFlipping(false);
    }
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
    setIsAutoFlipping(false);
  };

  if (!images.length) {
    return (
      <div className="w-full max-w-md aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {/* Main Flipbook Container */}
      <div className="relative aspect-[3/4] bg-white rounded-lg shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPage}
            src={images[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className="w-full h-full object-cover"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              ←
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === images.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              →
            </button>
          </>
        )}

        {/* Page Counter */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentPage + 1} / {images.length}
        </div>
      </div>

      {/* Page Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage 
                  ? 'bg-primary' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Instructions */}
      <p className="text-center text-sm text-gray-500 mt-2">
        Click arrows or dots to navigate pages
      </p>
    </div>
  );
}

export default Flipbook;