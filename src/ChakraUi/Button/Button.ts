import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  border: "2px solid",
  borderRadius: "full",
  fontWeight: "semibold",
  color: "black",
  _hover: {
    color: "#fafafa",
    bg: "black",
    border: "2px solid",
    borderColor: "#000",
  },
});
const solid = defineStyle({
  borderRadius: "full",
  fontWeight: "semibold",
  color: "#fafafa",
  background: "#000",

  textTransform: "capitalize",
  _hover: {
    bg: "#fafafa",
    color: "black",
  },
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
