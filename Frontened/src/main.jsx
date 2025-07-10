// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { Provider } from 'react-redux';
// import { store } from './store.js';
// import { ClerkProvider } from '@clerk/clerk-react';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';

// import App from './App.jsx';
// import SignInPage from './pages/Signin.jsx';

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing Clerk publishable key. Check .env file.');
// }


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<App />} />
//       <Route path="/signIn" element={<SignInPage />} />
//     </>
//   )
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//         <RouterProvider router={router} />
//       </ClerkProvider>
//     </Provider>
//   </StrictMode>
// );



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { ClerkProvider } from '@clerk/clerk-react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Make sure this path is correct

// Your pages
import App from './App.jsx';
import SignInPage from './pages/Signin.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk publishable key. Check .env file.');
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/signIn" element={<SignInPage />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ClerkProvider>
    </Provider>
  </StrictMode>
);
