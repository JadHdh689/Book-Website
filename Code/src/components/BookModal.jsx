import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Flipbook from './Flipbook';

function BookModal({ book, isOpen, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleViewDetails = () => {
    onClose();
    navigate(`/groups/${book.groupId}/books/${book.id}`);
  };

  if (!book) return null;

  // Prepare flipbook images (first 4 available materials)
  const flipbookImages = [];
  if (book.cover) flipbookImages.push(book.cover);
  if (book.materials?.story) flipbookImages.push(book.materials.story);
  if (book.materials?.activity) flipbookImages.push(book.materials.activity);
  if (book.materials?.guide) flipbookImages.push(book.materials.guide);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content w-full max-w-4xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Flipbook */}
                <div className="flex flex-col items-center">
                  <Flipbook images={flipbookImages} />
                </div>

                {/* Right Column - Book Info */}
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    {book.title}
                  </h2>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      Group {book.groupId}
                    </span>
                  </div>

                  <div className="prose prose-gray max-w-none mb-8 flex-grow">
                    <p className="text-gray-light leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  {/* Materials Available */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-3 text-gray-dark">Available Materials:</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        Cover
                      </span>
                      {book.materials?.activity && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          Activity
                        </span>
                      )}
                      {book.materials?.certificate && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          Certificate
                        </span>
                      )}
                      {book.materials?.guide && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          Guide
                        </span>
                      )}
                      {book.materials?.stickers && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          Stickers
                        </span>
                      )}
                      {book.materials?.story && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          Story
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleViewDetails}
                      className="btn btn-primary flex-1"
                    >
                      View Full Details
                    </button>
                    <button
                      onClick={onClose}
                      className="btn btn-outline flex-1"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BookModal;