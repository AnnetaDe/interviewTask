import { Config } from "tailwindcss"

const config: Config = {
  mode:"jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors: {
        teal: {
          500: "#17a2b8", 
         
        },
        gray: {
         
          900: "#6c757d", 
        },
        white: {
          100: '#fff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
     
    },
  },
  plugins: [
      require("tailwind-scrollbar"),
    
  ],
}
export default config

