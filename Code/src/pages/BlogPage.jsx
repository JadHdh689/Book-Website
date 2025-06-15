import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogById, getAllBlogs } from '../data/booksData';

function BlogPage() {
  const { blogId } = useParams();
  const blog = getBlogById(blogId);
  const allBlogs = getAllBlogs();

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = allBlogs.filter(b => b.id !== blog.id);

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
            <Link to="/#blog" className="text-gray-500 hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-dark">{blog.title}</span>
          </nav>
        </div>
      </section>

      {/* Blog Content */}
      <article className="section">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <header className="text-center mb-12">
              <div className="mb-4">
                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
                  {blog.ageRange}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-dark">
                {blog.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-light font-medium mb-8">
                {blog.subtitle}
              </h2>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-light leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/#blog"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium"
              >
                ← Back to All Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="section bg-bg">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blogs/${relatedBlog.id}`}
                    className="card group block"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <div className="mb-2">
                        <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                          {relatedBlog.ageRange}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <h4 className="font-medium text-gray-dark mb-3">
                        {relatedBlog.subtitle}
                      </h4>
                      <p className="text-gray-light line-clamp-3">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="mt-4">
                        <span className="text-primary font-medium group-hover:text-secondary transition-colors">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogPage;