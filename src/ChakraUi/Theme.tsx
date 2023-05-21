import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./Input/Input";
import { buttonTheme } from "./Button/Button";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.900",
        lineHeight: "tall",
      },
      a: {
        color: "inherit",
      },
    },
  },
  fonts: {
    heading: "Ultra",
    body: "Lexend",
  },
  components: {
    Input: inputTheme,
    Button: buttonTheme,
  },
});

export default Theme;
