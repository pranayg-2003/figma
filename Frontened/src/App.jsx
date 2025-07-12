// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { motion } from 'framer-motion';
// import penDrawing from './assets/pen-drawing.svg'; // Make sure this file exists

// const sentence = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       staggerChildren: 0.05,
//     },
//   },
// };

// const letter = {
//   hidden: { opacity: 0, x: 10 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: 'spring',
//       damping: 12,
//       stiffness: 100,
//     },
//   },
// };

// export default function App() {
//   const text = 'Welcome to Crayon.io!';

//   return (
//     <>
//       <Navbar />

//       {/* Floating colored circles */}
//       <div className="svg-background">
//         <svg width="100%" height="100%">
//           <circle className="circle-svg circle-1" cx="20%" cy="30%" r="100" />
//           <circle className="circle-svg circle-2" cx="70%" cy="20%" r="80" />
//           <circle className="circle-svg circle-3" cx="50%" cy="70%" r="60" />
//           <circle className="circle-svg circle-4" cx="80%" cy="60%" r="90" />
//         </svg>
//       </div>

//       <div className="app-wrapper">
//         {/* Left: Animated Heading */}
// <div className="left-column">
//   {/* existing animated heading */}
//   <motion.h1
//     className="heading"
//     variants={sentence}
//     initial="hidden"
//     animate="visible"
//   >
//     {text.split('').map((char, index) => (
//       <motion.span key={index} variants={letter}>
//         {char === ' ' ? '\u00A0' : char}
//       </motion.span>
//     ))}
//   </motion.h1>

//   {/* new Get‑Started button */}
//   <motion.button
//     className="btn-get-started"
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 1.8, duration: 0.7 }}
//     // if you have react‑router, turn it into a <Link ...> here
//     onClick={() => (window.location.href = '/login')}
//   >
//     Get&nbsp;Started
//   </motion.button>

//   {/* existing description */}
//   <motion.p
//     className="description"
//     initial={{ opacity: 0, x: 10 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ delay: 2.4, duration: 1 }}
//   >
//     Start drawing, watching episodes, or exploring our colorful gallery.
//   </motion.p>
// </div>


//         {/* Right: Just the Pen */}
//         <div className="right-column">
//           <motion.img
//             src={penDrawing}
//             alt="Pen Drawing"
//             className="crayon-image"
//             initial={{ opacity: 0, scale: 0.8, clipPath: 'inset(100% 0% 0% 0%)' }}
//             animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
//             transition={{ duration: 2, ease: 'easeOut', delay: 1.2 }}
//           />
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; // now receives theme props
import { motion } from 'framer-motion';
import penDrawing from './assets/pen-drawing.svg';
import { Dialog, Slide, CssBaseline } from '@mui/material';
import { SignIn } from '@clerk/clerk-react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const sentence = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.05 } },
};

const letter = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 },
  },
};

// MUI slide‑up transition for the dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={400} />;
});

export default function App() {
  const text = 'Welcome to Crayon.io!';
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ---- BLUR WRAPPER ---- */}
      <div className={open ? 'page-content blurred' : 'page-content'}>
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
          {/* Left column */}
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

            {/* Get‑Started button – opens modal */}
            <motion.button
              className="btn-get-started"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.7 }}
              onClick={() => setOpen(true)}
            >
              Get&nbsp;Started
            </motion.button>

            <motion.p
              className="description"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 1 }}
            >
              Start drawing, watching episodes, or exploring our colorful
              gallery.
            </motion.p>
          </div>

          {/* Right column */}
          <div className="right-column">
            <motion.img
              src={penDrawing}
              alt="Pen Drawing"
              className="crayon-image"
              initial={{
                opacity: 0,
                scale: 0.8,
                clipPath: 'inset(100% 0% 0% 0%)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% 0% 0% 0%)',
              }}
              transition={{ duration: 2, ease: 'easeOut', delay: 1.2 }}
            />
          </div>
        </div>
      </div>

      {/* ---- SIGN‑IN MODAL ---- */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 3,
            boxShadow: 24,
            minWidth: { xs: '280px', sm: '360px' },
          },
        }}
      >
        <SignIn routing="virtual" afterSignInUrl="/" afterSignUpUrl="/" />
      </Dialog>
    </ThemeProvider>
  );
}
