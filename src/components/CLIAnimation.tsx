import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

interface CLIAnimationProps {
  onComplete: () => void;
}

const CLIAnimation = ({ onComplete }: CLIAnimationProps) => {
  const welcomeText = `>Welcome to my portfolio. I'm Shant Bolat — a passionate problem solver with interests in Quantitative Finance, Data Analytics, Math, Cryptography & Privacy Software and Programming.
> Beyond tech, I have a wide array of interests, I'm big on weightlifting, basketball, fascinated by neuroscience, space, philosophy and love competitive strategy games like Chess, Backgammon, and Poker.
> I'm a nerd who loves tinkering with software, hardware, building better versions of simple tools (such as LuxPDF!!!) I use everyday, or reverse engineering a tool I find really interesting (like the TOR Browser). I delve everything into deeper detail in my Blog, where I talk about my projects, ideas, or what I learned in detail, answering questions like why I made a tool, why there useful and more! My home page talks about who I am in detail. 
> Thanks for visiting :)`;

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