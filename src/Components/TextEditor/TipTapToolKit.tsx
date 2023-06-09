import { Flex, IconButton, Icon } from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
} from "@chakra-ui/react";
import { ImItalic } from "react-icons/im";
import { GrBold, GrCode } from "react-icons/gr";
import { BiCodeBlock } from "react-icons/bi";
import { FaListUl, FaListOl, FaHeading, FaCheck } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

type ToolkitProp = {
  editor: any;
};
const ToolKit: React.FC<ToolkitProp> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const active = "whiteAlpha.600";
  const inActive = "";
  const btnColorScheme = "whiteAlpha";
  const btnFontColor = "#fff";

  return (
    <Flex
      width={"100%"}
      h={"10vh"}
      p={"4"}
      bg="gray.900"
      justify={"space-evenly"}
    >
      <IconButton
        icon={<GrBold />}
        aria-label="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        bg={editor.isActive("bold") ? `${active}` : `${inActive}`}
        color={btnFontColor}
        colorScheme={btnColorScheme}
      />
      {/* <IconButton
        aria-label="code"
        icon={<GrCode />}
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        bg={editor.isActive("code") ? `${active}` : `${inActive}`}
        colorScheme={btnColorScheme}
        color={btnFontColor}
      /> */}
      <IconButton
        aria-label="Blockquote"
        icon={<RiDoubleQuotesL />}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        bg={editor.isActive("blockquote") ? `${active}` : `${inActive}`}
        colorScheme={btnColorScheme}
        color={btnFontColor}
      />
      <IconButton
        aria-label="Italic"
        icon={<ImItalic />}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        bg={editor.isActive("italic") ? `${active}` : `${inActive}`}
        colorScheme={btnColorScheme}
        color={btnFontColor}
      />
      <IconButton
        aria-label="codeBlock"
        borderRadius={"none"}
        icon={<BiCodeBlock />}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        bg={editor.isActive("codeBlock") ? `${active}` : `${inActive}`}
        colorScheme={btnColorScheme}
        color={btnFontColor}
      />
      <IconButton
        aria-label="listItem"
        icon={<FaListUl />}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        bg={editor.isActive("bulletList") ? `${active}` : `${inActive}`}
        colorScheme={btnColorScheme}
        color={btnFontColor}
      />
      <IconButton
        aria-label="orderedList"
        icon={<FaListOl />}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().splitListItem("listItem")}
        bg={editor.isActive("orderedList") ? `${active}` : `${inActive}`}
        colorScheme={btnColorScheme}
        color={btnFontColor}
      />
      <Popover lazyBehavior={"unmount"}>
        <PopoverTrigger>
          <IconButton icon={<FaHeading />} aria-label="Heading" />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />

          <PopoverBody fontWeight={"700"} cursor={"pointer"}>
            <Text
              fontSize={"3xl"}
              onClick={(e) =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              display={"flex"}
              alignItems={"center"}
              width={"50%"}
            >
              H1
              <Icon
                as={FaCheck}
                fontSize={"sm"}
                ml={"7"}
                display={
                  editor.isActive("heading", { level: 1 }) ? "flex" : "none"
                }
              />
            </Text>
            <Text
              fontSize={"2xl"}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              display={"flex"}
              alignItems={"center"}
              width={"50%"}
            >
              H2
              <Icon
                as={FaCheck}
                fontSize={"sm"}
                ml={"7"}
                display={
                  editor.isActive("heading", { level: 2 }) ? "flex" : "none"
                }
              />
            </Text>
            <Text
              fontSize={"xl"}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              display={"flex"}
              alignItems={"center"}
              width={"50%"}
            >
              H3
              <Icon
                as={FaCheck}
                fontSize={"sm"}
                ml={"7"}
                display={
                  editor.isActive("heading", { level: 3 }) ? "flex" : "none"
                }
              />
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
export default ToolKit;
