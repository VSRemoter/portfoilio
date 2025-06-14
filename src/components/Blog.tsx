import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'The Beauty of Cryptographic Anonymity',
    excerpt: 'Exploring the fascinating world of cryptographic anonymity and its importance in today\'s digital age.',
    date: '2024-03-15',
  },
  {
    title: 'Why Backgammon Teaches You Risk Better Than Wall Street',
    excerpt: 'How ancient board games can provide better insights into risk management than traditional financial education.',
    date: '2024-03-10',
  },
  {
    title: 'Mental Models for Quantitative Thinking',
    excerpt: 'Developing powerful mental frameworks for approaching complex quantitative problems.',
    date: '2024-03-05',
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-green-400 mb-8">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-400 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <button className="text-green-400 hover:text-green-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog; 