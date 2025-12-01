import { createSlice } from "@reduxjs/toolkit";

// Get theme from localStorage or default to 'dark'
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "dark";
};

const initialState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      if (state.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
      if (action.payload === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

// Initialize theme on load immediately
if (typeof window !== "undefined") {
  const initialTheme = getInitialTheme();
  if (initialTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export const themeReducer = themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;

