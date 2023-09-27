import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  border: "2px solid",
  borderRadius: "full",
  fontWeight: "semibold",
  color: "black",
  _hover: {
    color: "#fff",
    bg: "black",
  },
});
const solid = defineStyle({
  borderRadius: "full",
  fontWeight: "semibold",
  color: "black",
  colorScheme: "blackAlpha",
  textTransform: "capitalize",
});
const brandPrimary = defineStyle({
  background: "black",
  color: "white",
  borderRadius: "full",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});
export const buttonTheme = defineStyleConfig({
  variants: {
    outline,
    solid,
    brandPrimary,
  },
});
