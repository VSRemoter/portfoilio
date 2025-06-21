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
    image: '/images/crypto.jpg',
    slug: '/blog/cryptographic-anonymity',
  },
  {
    title: 'Why Backgammon Teaches You Risk Better Than Wall Street',
    excerpt: 'How ancient board games can provide better insights into risk management than traditional financial education.',
    date: '2024-03-10',
    image: '/images/backgammon.jpg',
    slug: '/blog/backgammon-risk',
  },
  {
    title: 'Mental Models for Quantitative Thinking',
    excerpt: 'Developing powerful mental frameworks for approaching complex quantitative problems.',
    date: '2024-03-05',
    image: '/images/quant.jpg',
    slug: '/blog/quantitative-thinking',
  },
];

const About = () => {
  const router = useRouter();
  const technicalInterests = [
    'Data & Statistical Modelling',
    'Math & Computer Science Topics',
    'Programming (Python, R, SQL, C, Microsoft Excel)',
    'Game Theory & Decision Making',
    'Basic Infrastructure (PostgreSQL, Hosting, Virtual Machines, REST API, Git etc)',
    'Communications',
  ];

  const personalInterests = [
    'Gym & Nutrition',
    'Basketball',
    'Cryptography & Privacy Tools',
    'Machine Learning & Deep Learning',
    'Strategic Games (Backgammon, Chess, Poker)',
    'Philosophy',
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
              <p className="text-gray-300 leading-relaxed mb-4">
                Hi, I'm Shant Bolat a 3rd year at Stevens Institute of Technology, obtaining my Bachelor of Science in Quantitative Finance with a Concentration in Computer Science, so lots of Math, Statistics, and Computer Science subjects I've learned about.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I absolutely love learning & experimenting with different things. Recently, I've been really into Privacy Tools and Cryptography, things like TOR, Tails OS, Garlic Routing, Monero etc. I even bought an Old Lenovo Thinkpad off eBay to play around with these tools in an attempt to understand how they really work.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not experimenting or learning, I usually play basketball with friends, go to the gym (which I take very seriously, striving for 5-6x a week), read, or experiment with diets, different workouts etc.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Technical Interests & Skills</h2>
              <ul className="list-disc pl-6 space-y-2">
                {technicalInterests.map((interest) => (
                  <li key={interest} className="text-gray-300">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Personal Interests</h2>
              <ul className="list-disc pl-6 space-y-2">
                {personalInterests.map((interest) => (
                  <li key={interest} className="text-gray-300">
                    {interest}
                  </li>
                ))}
              </ul>
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