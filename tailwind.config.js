/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xxl: "1530px",
      },
      padding: {
        DEFAULT: "16px",
        sm: "1rem",
        lg: "2rem",
        xxl: "24px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        publicSans: ["Public Sans", "serif"],
        lato: ["Lato", "serif"],
      },
      screens: {
        xs: "390px",
        xxs: "480px",
        sm: "650px",
        md: "768px",
        xmd: "992px",
        lg: "1024px",
        xlg: "1200px",
        xl: "1560px",
        xxl: "1920px",
      },
      colors: {
        navbarColor: "#616161",
        buttonColor: "#07A0EC",

        
        headingColor: "#000B1C",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        dashboardShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.50)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
