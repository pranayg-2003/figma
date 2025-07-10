// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // "light" or "dark"
    primary: {
      main: "#ec4899", // pink-500 glow color
    },
    background: {
      default: "#0f172a", // dark background
      paper: "#1e293b", // card/paper background
    },
    text: {
      primary: "#f1f5f9", // light text
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
