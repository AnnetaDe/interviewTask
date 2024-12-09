import { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  mode:"jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors: {
        teal: "#17a2b8", 
        grey: "#6c757d",
        white: "#fff",
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'], 
   
          
      },
      
      fontSize: {
        'xxs': '.625rem', // 10px
        'xs': '.75rem', // 12px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
     
     fill: ({ theme }) => ({
      none: 'none',
      ...theme('colors'),
    }),
      scrollMargin: {
        16: '4rem',
      },
      stroke: ({ theme }) => ({
      none: 'none',
      ...theme('colors'),
      }),
     
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: ({ theme }) => ({
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
     
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require('@tailwindcss/typography'),
    plugin(function ({addComponents}) {
      addComponents({
         '.btn': {
          backgroundColor: 'var(--button-primary-bg)',
          color: 'white',
          padding: '0.5rem 1rem',
   
          fontWeight: '500',
          '&:hover': {
            backgroundColor: 'var(--button-primary-bg-hover)',
          },
        },
        '.checkbox': {
          width: '1.5rem',
          height: '1.5rem',
          backgroundColor: 'var(--checkbox-bg)',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: 'var(--checkbox-bg-hover)',
          },
        },
      })
      
    })

    
    
  ],
}
export default config

