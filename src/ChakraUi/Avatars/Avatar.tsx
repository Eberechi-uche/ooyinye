import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style

  container: {
    border: "none",
  },
  excessLabel: {
    color: "#000",
    border: "none",
    bg: "none",
  },
});

export const avatarTheme = defineMultiStyleConfig({ baseStyle });
