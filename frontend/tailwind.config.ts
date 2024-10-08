import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|navbar|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      //navbar only shows for small
      'xsm': {'min': '315px', 'max': '375px'},
      'sm': {'min': '376px', 'max': '576px'},
      // => @media (min-width: 576px) { ... }

      'md': {'min': '577px', 'max': '960px'},
      // => @media (min-width: 960px) { ... }

      'lg': {'min':'961px', 'max': '1440px'},
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [nextui()],
};
export default config;
