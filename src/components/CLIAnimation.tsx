import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

interface CLIAnimationProps {
  onComplete: () => void;
}

const CLIAnimation = ({ onComplete }: CLIAnimationProps) => {
  const welcomeText = `Welcome to my portfolio site, I hope you find me as a fascinating person. I'm Bob Jones, and I enjoy Quantitative Finance, Data Analytics, Math, Cryptography & Privacy Tools, Programming, and Communicating! Outside of my nerdy side, I absolutely love going to the gym, learning about nutrition and how the brain & body works, and I love playing basketball and strategy games like Backgammon, Chess, and Poker. I think I'm a great mix of being a nerdy kid but also just a fun person to engage with. I have a wide array of interests and find the world a fascinating thing. I hope you enjoy your stay, and find me as an interesting person—whether you're a recruiter looking for your next employee or someone to connect and have a chill chat with.`;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
    >
      <div className="max-w-4xl w-full">
        <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-green-400 text-2xl">
            <TypeAnimation
              sequence={[
                welcomeText,
                1000,
                () => {
                  setTimeout(onComplete, 1000);
                },
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={0}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CLIAnimation; 