import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  border: "2px dashed",
  borderRadius: 0,
  fontWeight: "semibold",
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
    brandPrimary,
  },
});
