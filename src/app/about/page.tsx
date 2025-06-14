'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const featuredBlogs = [
  {
    title: 'The Beauty of Cryptographic Anonymity',
    excerpt: 'Exploring the fascinating world of cryptographic anonymity and its importance in today\'s digital age.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop&q=60',
    slug: '/blog/cryptographic-anonymity',
  },
  {
    title: 'Why Backgammon Teaches You Risk Better Than Wall Street',
    excerpt: 'How ancient board games can provide better insights into risk management than traditional financial education.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&auto=format&fit=crop&q=60',
    slug: '/blog/backgammon-risk',
  },
  {
    title: 'Mental Models for Quantitative Thinking',
    excerpt: 'Developing powerful mental frameworks for approaching complex quantitative problems.',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
    slug: '/blog/quantitative-thinking',
  },
];

const About = () => {
  const router = useRouter();
  const technicalInterests = [
    'Quantitative Finance',
    'Data Analytics',
    'Math',
    'Cryptography/Privacy Tools',
    'Programming',
    'Communication',
  ];

  const personalInterests = [
    'Gym',
    'Nutrition',
    'Brain & Body Science',
    'Basketball',
    'Backgammon',
    'Chess',
    'Poker',
  ];

  const skills = [
    'Python',
    'Java',
    'R',
    'C++',
    'PyTorch',
    'scikit-learn',
    'SQL',
    'MongoDB',
    'Linux',
    'Git',
    'Excel',
    'LaTeX',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
              alt="Bob Jones"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-green-400 mb-4">About Me</h1>
              <p className="text-gray-300 leading-relaxed">
                Welcome to my portfolio site, I hope you find me as a fascinating person. I'm Bob Jones, and I enjoy Quantitative Finance, Data Analytics, Math, Cryptography & Privacy Tools, Programming, and Communicating! Outside of my nerdy side, I absolutely love going to the gym, learning about nutrition and how the brain & body works, and I love playing basketball and strategy games like Backgammon, Chess, and Poker. I think I'm a great mix of being a nerdy kid but also just a fun person to engage with. I have a wide array of interests and find the world a fascinating thing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Technical Interests</h2>
              <div className="flex flex-wrap gap-2">
                {technicalInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-900 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Personal Interests</h2>
              <div className="flex flex-wrap gap-2">
                {personalInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-900 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Blogs Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-8">Featured Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredBlogs.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform cursor-pointer"
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
                  <h3 className="text-xl font-semibold text-green-400 mb-2">
                    {post.title}
                  </h3>
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
        </div>
      </motion.div>
    </div>
  );
};

export default About; 