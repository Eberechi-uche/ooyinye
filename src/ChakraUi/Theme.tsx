import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./Input/Input";
import { buttonTheme } from "./Button/Button";
import { avatarTheme } from "./Avatars/Avatar";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#fff",
        color: "gray.700",
        fontSize: "lg",
      },
      a: {
        color: "inherit",
      },
    },
  },
  fonts: {
    heading: `'Cedarville Cursive', sans-serif;`,
    body: `'Source Sans Pro', sans-serif`,
  },
  components: {
    Input: inputTheme,
    Button: buttonTheme,
    Avatar: avatarTheme,
  },
});

export default Theme;
