import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style

  container: {
    borderColor: "orange.500",
  },
  excessLabel: {
    bg: "orange.500",
    color: "white",

    borderRadius: "full",
  },
});

export const avatarTheme = defineMultiStyleConfig({ baseStyle });
