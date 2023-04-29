import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./Input/Input";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.900",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
      },
    },
  },
  fonts: {
    heading: "Ultra",
    body: "Lexend",
  },
  components: {
    Input: inputTheme,
  },
});

export default Theme;
