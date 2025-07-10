import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import penDrawing from './assets/pen-drawing.svg'; // Make sure this file exists

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function App() {
  const text = 'Welcome to Crayon.io!';

  return (
    <>
      <Navbar />

      {/* Floating colored circles */}
      <div className="svg-background">
        <svg width="100%" height="100%">
          <circle className="circle-svg circle-1" cx="20%" cy="30%" r="100" />
          <circle className="circle-svg circle-2" cx="70%" cy="20%" r="80" />
          <circle className="circle-svg circle-3" cx="50%" cy="70%" r="60" />
          <circle className="circle-svg circle-4" cx="80%" cy="60%" r="90" />
        </svg>
      </div>

      <div className="app-wrapper">
        {/* Left: Animated Heading */}
        <div className="left-column">
          <motion.h1
            className="heading"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {text.split('').map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="description"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Start drawing, watching episodes, or exploring our colorful gallery.
          </motion.p>
        </div>

        {/* Right: Just the Pen */}
        <div className="right-column">
          <motion.img
            src={penDrawing}
            alt="Pen Drawing"
            className="crayon-image"
            initial={{ opacity: 0, scale: 0.8, clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 2, ease: 'easeOut', delay: 1.2 }}
          />
        </div>
      </div>
    </>
  );
}
