'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import About from '@/app/about/page';
import Layout from '@/components/Layout';

const welcomeMessage = `>Welcome to my portfolio. I'm Shant Bolat — a passionate problem solver with interests in Quantitative Finance, Data Analytics, Math, Cryptography & Privacy Software and Programming.
> Beyond tech, I have a wide array of interests, I'm big on weightlifting, basketball, fascinated by neuroscience, space, philosophy and love competitive strategy games like Chess, Backgammon, and Poker.
> I'm a nerd who loves tinkering with software, hardware, building better versions of simple tools (such as LuxPDF!!!) I use everyday, or reverse engineering a tool I find really interesting (like the TOR Browser). I delve everything into deeper detail in my Blog, where I talk about my projects, ideas, or what I learned in detail, answering questions like why I made a tool, why there useful and more! My home page talks about who I am in detail. 
> Thanks for visiting :)`;

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