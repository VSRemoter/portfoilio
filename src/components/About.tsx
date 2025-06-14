import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
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
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder-profile.jpg"
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
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm"
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
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm"
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
      </motion.div>
    </div>
  );
};

export default About; 