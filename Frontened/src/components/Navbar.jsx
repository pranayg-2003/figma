// import { useState } from 'react';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-yellow-200 fixed w-full top-0 left-0 z-50 shadow-md border-b border-yellow-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo + Brand */}
//           <a href="/" className="flex items-center space-x-3">
//             <img
//               src={null}
//               alt="Shinchan Logo"
//               className="h-10"
//             />
//             <span className="text-2xl font-extrabold text-pink-600 tracking-wide">ShinDraw</span>
//           </a>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             <a href="#" className="text-blue-800 font-medium hover:text-pink-600 transition">Home</a>
//             <a href="#" className="text-blue-800 font-medium hover:text-pink-600 transition">Episodes</a>
//             <a href="#" className="text-blue-800 font-medium hover:text-pink-600 transition">Draw</a>

//             {/* Auth Buttons */}
//             <SignedOut>
//               <SignInButton mode="modal">
//                 <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-600 transition-all">
//                   Get Started
//                 </button>
//               </SignInButton>
//             </SignedOut>
//             <SignedIn>
//               <UserButton afterSignOutUrl="/" />
//             </SignedIn>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-pink-600">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-3 space-y-2">
//             <a href="#" className="block text-blue-800 font-medium hover:text-pink-600">Home</a>
//             <a href="#" className="block text-blue-800 font-medium hover:text-pink-600">Episodes</a>
//             <a href="#" className="block text-blue-800 font-medium hover:text-pink-600">Draw</a>
//             <SignedOut>
//               <SignInButton mode="modal">
//                 <button className="w-full bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
//                   Get Started
//                 </button>
//               </SignInButton>
//             </SignedOut>
//             <SignedIn>
//               <UserButton afterSignOutUrl="/" />
//             </SignedIn>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }




import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Button,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const navItems = ['Home', 'Design', 'Resources', 'Gallery', 'Contact'];

export default function Navbar() {
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const [designAnchorEl, setDesignAnchorEl] = useState(null);
  const isDesignMenuOpen = Boolean(designAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleDesignMenuOpen = (event) => {
    setDesignAnchorEl(event.currentTarget);
  };

  const handleDesignMenuClose = () => {
    setDesignAnchorEl(null);
  };

  const mobileMenu = (
    <Menu
  anchorEl={designAnchorEl}
  open={isDesignMenuOpen}
  onClose={handleDesignMenuClose}
  sx={{
    '& .MuiPaper-root': {
      backgroundColor: '#1e293b',
      color: '#f472b6',
      minWidth: '220px',
      boxShadow: '0 0 10px #ec4899',
    },
  }}
>
  {[
    'Modern Art',
    'Anime Sketch',
    'Minimal Poster',
    'Digital Graffiti',
    '3D Illustration',
    'Pixel Landscape',
    'Futuristic Neon',
    'Watercolor Fantasy',
  ].map((design) => (
    <MenuItem
      key={design}
      onClick={handleDesignMenuClose}
      sx={{
        fontSize: '1.1rem',
        fontWeight: 500,
        px: 3,
        py: 1.2,
        '&:hover': {
          backgroundColor: '#334155',
          color: '#fff',
          textShadow: '0 0 6px #ec4899',
        },
      }}
    >
      {design}
    </MenuItem>
  ))}
</Menu>

  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#0f172a',
          boxShadow: '0 0 10px #ec4899',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo + Title */}
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 36,
                height: 36,
                backgroundColor: '#ec4899',
                borderRadius: '50%',
                mr: 1,
                boxShadow: '0 0 8px #ec4899',
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 800,
                color: '#ec4899',
                textShadow: '0 0 4px #ec4899',
              }}
            >
              Crayon.io
            </Typography>
          </Box>

          {/* Center Nav Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navItems.map((item) =>
              item === 'Design' ? (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant="button"
                    onClick={handleDesignMenuOpen}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#f472b6',
                      cursor: 'pointer',
                      fontWeight: 500,
                      px: 1,
                      '&:hover': {
                        color: '#fff',
                        textShadow: '0 0 6px #ec4899',
                      },
                    }}
                  >
                    {item}
                    <KeyboardArrowDownIcon fontSize="small" sx={{ ml: 0.5 }} />
                  </Typography>

                  <Menu
                    anchorEl={designAnchorEl}
                    open={isDesignMenuOpen}
                    onClose={handleDesignMenuClose}
                    sx={{
                      '& .MuiPaper-root': {
                        backgroundColor: '#1e293b',
                        color: '#f472b6',
                      },
                    }}
                  >
                    <MenuItem onClick={handleDesignMenuClose}>Modern Art</MenuItem>
                    <MenuItem onClick={handleDesignMenuClose}>Anime Sketch</MenuItem>
                    <MenuItem onClick={handleDesignMenuClose}>Minimal Poster</MenuItem>
                    <MenuItem onClick={handleDesignMenuClose}>Digital Graffiti</MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Typography
                  key={item}
                  variant="button"
                  sx={{
                    color: '#f472b6',
                    cursor: 'pointer',
                    fontWeight: 500,
                    px: 1,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: '#fff',
                      textShadow: '0 0 6px #ec4899',
                    },
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>

          {/* Right side - notifications + auth */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            <IconButton color="inherit">
              <Badge badgeContent={2} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#ec4899',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#db2777',
                      boxShadow: '0 0 10px #ec4899',
                    },
                  }}
                >
                  Get Started
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleMobileMenuOpen}>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile menu */}
      {mobileMenu}
    </Box>
  );
}
