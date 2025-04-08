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
    <div className="w-full md:w-[80%] mx-auto h-screen">
      <div style={{backgroundImage: `url(${selectedChapter.image})`}} className="w-full bg-cover bg-center rounded-lg shadow-lg flex flex-col items-start justify-start h-[70%] p-4 bg-blend-overlay bg-gray-800 bg-opacity-70 text-white">
          <h2 className="text-5xl font-bold">{selectedChapter.title}</h2>
          <p className="mt-2">{selectedChapter.description}</p>
          <a href={selectedChapter.link} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Learn More</a>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
        {CHAPTERS.map((chapter, index) => (
          <motion.div
            key={index}
            className={`p-4 rounded-lg shadow-lg cursor-pointer ${selectedChapter.title === chapter.title ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} hover:text-secondary hover:bg-transparent transition duration-300`}
            onClick={() => handleTabChange(chapter)}
            // whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-md font-semibold">{`Chapter ${index+1}`}</h3>
            <p className="text-sm font-normal">{chapter.title}</p>
          </motion.div>
        ))}
      </div>

    </div>


  );
};

export default Milestones;
