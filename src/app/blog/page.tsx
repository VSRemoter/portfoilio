'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';

const blogPosts = [
  {
    title: 'The Beauty of Cryptographic Anonymity',
    excerpt: 'Exploring the fascinating world of cryptographic anonymity and its importance in today\'s digital age.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop&q=60',
    slug: '/blog/cryptographic-anonymity',
    readTime: '8 min read',
  },
  {
    title: 'Why Backgammon Teaches You Risk Better Than Wall Street',
    excerpt: 'How ancient board games can provide better insights into risk management than traditional financial education.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&auto=format&fit=crop&q=60',
    slug: '/blog/backgammon-risk',
    readTime: '10 min read',
  },
  {
    title: 'Mental Models for Quantitative Thinking',
    excerpt: 'Developing powerful mental frameworks for approaching complex quantitative problems.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
    slug: '/blog/quantitative-thinking',
    readTime: '12 min read',
  },
];

const Blog = () => {
  const router = useRouter();

  return (
    <Layout>
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
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform cursor-pointer"
                onClick={() => router.push(post.slug)}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-green-400 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="text-green-400 hover:text-green-300 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Blog; 