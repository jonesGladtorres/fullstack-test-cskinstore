import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  styles: {
    global: {
      body: {
        bg: 'blackAlpha.900',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: 'var(--font-montserrat), sans-serif',
    body: 'var(--font-montserrat), sans-serif',
  },
};

const theme = extendTheme(customTheme);

export default theme;
