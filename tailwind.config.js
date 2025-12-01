/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Dark Mode Colors (Modern & Vibrant)
      darkBrown: {
        DEFAULT: "#0a0a0f", // Very dark background
        light: "#1a1a24",
        lighter: "#2a2a35",
      },
      black: {
        DEFAULT: "#000000",
        light: "#0f0f1a",
      },
      white: {
        DEFAULT: "#ffffff",
        dark: "#e5e5e5",
        darker: "#cccccc",
      },
      // Modern Accent Colors
      primary: {
        DEFAULT: "#6366f1", // Indigo - modern purple-blue
        light: "#818cf8",
        dark: "#4f46e5",
        darker: "#4338ca",
      },
      secondary: {
        DEFAULT: "#ec4899", // Pink - vibrant accent
        light: "#f472b6",
        dark: "#db2777",
        darker: "#be185d",
      },
      accent: {
        DEFAULT: "#06b6d4", // Cyan - modern teal
        light: "#22d3ee",
        dark: "#0891b2",
        darker: "#0e7490",
      },
      // Legacy color names for compatibility (will be mapped to new colors)
      cyan: {
        DEFAULT: "#06b6d4",
        light: "#22d3ee",
        dark: "#0891b2",
      },
      orange: {
        DEFAULT: "#f59e0b", // Amber - warm accent
        light: "#fbbf24",
        dark: "#d97706",
        darker: "#b45309",
      },
      grey: {
        DEFAULT: "#6b7280",
        light: "#9ca3af",
        dark: "#4b5563",
      },
      lightGrey: {
        DEFAULT: "#9ca3af",
        light: "#d1d5db",
        dark: "#6b7280",
      },
      darkGrey: {
        DEFAULT: "#374151",
        light: "#4b5563",
        dark: "#1f2937",
      },
      // Light Mode Colors
      lightBg: {
        DEFAULT: "#fafafa",
        light: "#ffffff",
        dark: "#f5f5f5",
      },
      lightText: {
        DEFAULT: "#1f2937",
        light: "#374151",
        dark: "#111827",
      },
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(6, 182, 212, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(6, 182, 212, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(6, 182, 212, 0.5)",
        primaryShadow: "0px 0px 20px 0px rgba(99, 102, 241, 0.5)",
        primaryBigShadow: "10px 10px 1000px 500px rgba(99, 102, 241, 0.3)",
        primaryMediumShadow: "10px 10px 200px 150px rgba(99, 102, 241, 0.5)",
        secondaryShadow: "0px 0px 20px 0px rgba(236, 72, 153, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(245, 158, 11, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(245, 158, 11, 0.5)",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
