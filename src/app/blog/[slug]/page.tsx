'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Layout from '@/components/Layout';

// Blog post data
const blogPosts = {
  'cryptographic-anonymity': {
    title: 'The Beauty of Cryptographic Anonymity',
    date: 'March 15, 2024',
    author: 'Bob Jones',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200&auto=format&fit=crop&q=60',
    content: `
      <p class="mb-6">In today's digital age, where privacy seems increasingly elusive, cryptographic anonymity stands as a beacon of hope for those seeking to protect their digital footprint. This fascinating intersection of mathematics, computer science, and privacy rights has evolved from a niche academic concept to a crucial tool in our digital arsenal.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">The Mathematical Foundation</h2>
      <p class="mb-6">At its core, cryptographic anonymity relies on elegant mathematical principles. Public-key cryptography, zero-knowledge proofs, and ring signatures form the backbone of modern anonymous systems. These mathematical constructs allow us to prove something without revealing unnecessary information - a concept that's both beautiful and powerful.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">Real-World Applications</h2>
      <p class="mb-6">From secure messaging apps to anonymous cryptocurrencies, the applications of cryptographic anonymity are vast and growing. Consider the case of whistleblowers who need to communicate securely, or journalists working in oppressive regimes. These tools aren't just theoretical - they're saving lives and protecting freedoms.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">The Future of Privacy</h2>
      <p class="mb-6">As we move forward, the importance of cryptographic anonymity will only grow. With increasing surveillance and data collection, these tools provide a way to maintain privacy in an increasingly transparent world. The challenge lies in making these tools accessible while maintaining their security.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">Getting Started</h2>
      <p class="mb-6">For those interested in exploring cryptographic anonymity, here are some practical steps:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Learn the basics of public-key cryptography</li>
        <li>Experiment with secure messaging apps</li>
        <li>Understand the limitations and trade-offs</li>
        <li>Stay updated with the latest developments</li>
      </ul>

      <p class="mb-6">The beauty of cryptographic anonymity lies not just in its mathematical elegance, but in its potential to protect fundamental human rights in the digital age. As we continue to develop and refine these tools, we're not just building better technology - we're building a more private and secure future.</p>
    `,
  },
  'backgammon-risk': {
    title: 'Why Backgammon Teaches You Risk Better Than Wall Street',
    date: 'March 10, 2024',
    author: 'Bob Jones',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=1200&auto=format&fit=crop&q=60',
    content: `
      <p class="mb-6">In the world of risk management, Wall Street often takes center stage. But what if I told you that an ancient board game could teach you more about risk than years of financial education? Welcome to the world of backgammon, where risk management isn't just a concept - it's a way of life.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">The Psychology of Risk</h2>
      <p class="mb-6">Backgammon forces players to make decisions under uncertainty, much like financial markets. But unlike Wall Street, the consequences are immediate and personal. Every roll of the dice is a lesson in probability, every move a study in risk-reward analysis.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">Key Lessons from the Board</h2>
      <p class="mb-6">Here are some fundamental risk management principles that backgammon teaches better than any finance textbook:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Position sizing and portfolio management</li>
        <li>Understanding probability and expected value</li>
        <li>Emotional control under pressure</li>
        <li>Adapting to changing circumstances</li>
      </ul>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">Real-World Applications</h2>
      <p class="mb-6">The skills learned at the backgammon board translate directly to financial decision-making. From portfolio management to risk assessment, the principles are remarkably similar. The key difference? Backgammon provides immediate feedback and consequences, making the learning process more effective.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">The Future of Risk Education</h2>
      <p class="mb-6">As we look to the future of risk education, perhaps we should spend less time in finance classrooms and more time at the backgammon board. The lessons are clearer, the feedback more immediate, and the learning more engaging.</p>

      <p class="mb-6">Next time you're thinking about risk management, consider picking up a backgammon board instead of a finance textbook. You might be surprised at how much you learn.</p>
    `,
  },
  'quantitative-thinking': {
    title: 'Mental Models for Quantitative Thinking',
    date: 'March 5, 2024',
    author: 'Bob Jones',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=60',
    content: `
      <p class="mb-6">Quantitative thinking is more than just crunching numbers - it's a way of understanding the world through the lens of mathematics and logic. In this article, we'll explore powerful mental models that can transform how you approach complex problems and make decisions.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">The Power of Mental Models</h2>
      <p class="mb-6">Mental models are frameworks that help us understand how the world works. In quantitative thinking, these models serve as powerful tools for breaking down complex problems into manageable pieces. They help us see patterns, make predictions, and avoid common cognitive biases.</p>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">Essential Quantitative Models</h2>
      <p class="mb-6">Here are some of the most powerful mental models for quantitative thinking:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Expected Value and Decision Trees</li>
        <li>Bayesian Thinking</li>
        <li>Systems Thinking</li>
        <li>Statistical Significance</li>
        <li>Optimization Models</li>
      </ul>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">Practical Applications</h2>
      <p class="mb-6">These mental models find applications across various fields:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Financial Analysis and Investment</li>
        <li>Data Science and Machine Learning</li>
        <li>Scientific Research</li>
        <li>Business Strategy</li>
        <li>Personal Decision Making</li>
      </ul>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">Developing Your Quantitative Mindset</h2>
      <p class="mb-6">Building a strong quantitative mindset takes practice. Here are some strategies to develop your quantitative thinking skills:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Solve mathematical puzzles regularly</li>
        <li>Practice statistical analysis</li>
        <li>Learn programming and data analysis</li>
        <li>Study probability and game theory</li>
        <li>Apply quantitative thinking to everyday decisions</li>
      </ul>

      <h2 class="text-2xl font-semibold text-green-400 mt-8 mb-4">The Future of Quantitative Thinking</h2>
      <p class="mb-6">As we move into an increasingly data-driven world, the ability to think quantitatively becomes more valuable than ever. By developing these mental models, you're not just learning to crunch numbers - you're learning to see the world in a more precise and insightful way.</p>

      <p class="mb-6">Remember, quantitative thinking isn't about being a human calculator. It's about developing a framework for understanding complexity and making better decisions in an uncertain world.</p>
    `,
  },
};

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-red-400">Post not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-green-400 mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.article>
    </Layout>
  );
};

export default BlogPost; 