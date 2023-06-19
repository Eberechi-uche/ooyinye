import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./Input/Input";
import { buttonTheme } from "./Button/Button";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#fff",
        color: "gray.700",
      },
      a: {
        color: "inherit",
      },
    },
  },
  fonts: {
    heading: `'Source Sans Pro', sans-serif`,
    body: `'Source Sans Pro', sans-serif`,
  },
  components: {
    Input: inputTheme,
    Button: buttonTheme,
  },
});

export default Theme;
