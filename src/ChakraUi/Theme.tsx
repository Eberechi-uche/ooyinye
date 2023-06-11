import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./Input/Input";
import { buttonTheme } from "./Button/Button";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#F9F9F8",
        color: "gray.700",
      },
      a: {
        color: "inherit",
      },
    },
  },
  fonts: {
    heading: `'Urbanist Variable', sans-serif`,
    body: `'Urbanist Variable', sans-serif`,
  },
  components: {
    Input: inputTheme,
    Button: buttonTheme,
  },
});

export default Theme;
