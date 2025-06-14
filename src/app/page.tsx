'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import About from '@/app/about/page';
import Layout from '@/components/Layout';

const welcomeMessage = `Welcome to my portfolio site, I hope you find me as a fascinating person. I'm Bob Jones, and I enjoy Quantitative Finance, Data Analytics, Math, Cryptography & Privacy Tools, Programming, and Communicating! Outside of my nerdy side, I absolutely love going to the gym, learning about nutrition and how the brain & body works, and I love playing basketball and strategy games like Backgammon, Chess, and Poker. I think I'm a great mix of being a nerdy kid but also just a fun person to engage with. I have a wide array of interests and find the world a fascinating thing. I hope you enjoy your stay, and find me as an interesting person—whether you're a recruiter looking for your next employee or someone to connect and have a chill chat with.`;

const CLIAnimation = ({ onSkip }: { onSkip: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < welcomeMessage.length) {
        setDisplayedText(welcomeMessage.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 20);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Add keyboard event listener
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        onSkip();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onSkip]);

  return (
    <div 
      className="min-h-screen bg-black p-8 font-mono text-green-400 cursor-pointer"
      onClick={onSkip}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-green-500">visitor@portfolio:~$</span>
          <span className="ml-2">cat welcome.txt</span>
        </div>
        <div className="whitespace-pre-wrap">
          {displayedText}
          <span className={`inline-block w-2 h-6 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4"
          >
            <span className="text-green-500">visitor@portfolio:~$</span>
            <span className="ml-2">_</span>
          </motion.div>
        )}
        <div className="mt-8 text-sm text-gray-500">
          Press ESC, Enter, or click anywhere to skip
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [showCLI, setShowCLI] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Calculate time needed for typing (20ms per character) + 2 seconds buffer
    const typingTime = (welcomeMessage.length * 20) + 2000;
    const timer = setTimeout(() => {
      setShowCLI(false);
    }, typingTime);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setShowCLI(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showCLI ? (
        <CLIAnimation onSkip={handleSkip} />
      ) : (
        <Layout>
          <About />
        </Layout>
      )}
    </AnimatePresence>
  );
} 