import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GroupPage from './pages/GroupPage'
import BookDetailPage from './pages/BookDetailPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groups/:groupId" element={<GroupPage />} />
          <Route path="/groups/:groupId/books/:bookId" element={<BookDetailPage />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App