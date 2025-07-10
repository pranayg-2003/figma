// main.jsx or App.jsx
// import React from 'react';
// import { AppBar } from '@mui/material';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './theme'; // adjust path if needed
// import Navbar from './components/Navbar';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline /> {/* Reset styles and apply background */}
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );



// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import crayonImg from './assets/crayon.png'; // put your crayon image here

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
      <div className="app-wrapper">
        {/* Left side: animated text */}
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

        {/* Right side: animated image */}
        <div className="right-column">
        <motion.img
  src={crayonImg}
  alt="Crayon Design"
  className="crayon-image"
  initial={{ opacity: 0, scale: 0.8, clipPath: 'inset(100% 0% 0% 0%)' }}
  animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
  transition={{
    duration: 2,
    ease: 'easeOut',
    delay: 1.2
  }}
/>

        </div>
      </div>
    </>
  );
}
