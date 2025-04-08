import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHAPTERS = [
  {
    title: "India, a greenfield market",
    description: "Learn the basics of React, including components, props, and state.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc",
    link: "https://example.com/chapter1",
  },
  {
    title: "Driven by Demand",
    description: "Learn how to use React Router for navigation in your React app.",
    image: "https://plus.unsplash.com/premium_photo-1716762544373-77789a03d6c7",
    link: "https://example.com/chapter2",
  },
  {
    title: "Habitats deployed for you",
    description: "Learn how to manage state in your React app using Redux.",
    image: "https://images.unsplash.com/photo-1590496794008-383c8070b257",
    link: "https://example.com/chapter3",
  },
  {
    title: "Build your Telecom Empire",
    description: "Learn how to style your React components using CSS and styled-components.",
    image: "https://images.unsplash.com/photo-1525646489322-bc1024bb5d58",
    link: "https://example.com/chapter4",
  },
];

const Milestones = () => {
  const [selectedChapter, setSelectedChapter] = useState(CHAPTERS[0]);

  const handleTabChange = (chapter) => {
    setSelectedChapter(chapter);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${selectedChapter.image})` }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedChapter.title}
          className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {selectedChapter.title}
          </motion.h1>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {selectedChapter.description}
          </motion.p>
          <motion.a
            href={selectedChapter.link}
            className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="flex mt-6 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {CHAPTERS.map((chapter, index) => (
          <motion.button
            key={index}
            onClick={() => handleTabChange(chapter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg m-2 text-sm font-medium ${
              selectedChapter.title === chapter.title
                ? 'bg-white text-blue-600 border border-blue-600'
                : 'bg-blue-600 text-white'
            }`}
          >
            {chapter.title}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Milestones;
