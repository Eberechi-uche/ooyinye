import { Flex, IconButton } from "@chakra-ui/react";

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
import { FaListUl, FaListOl, FaHeading } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

type ToolkitProp = {
  editor: any;
};
const ToolKit: React.FC<ToolkitProp> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const active = "green.300";
  const inActive = "";
  const colorScheme = "whatsapp";
  return (
    <Flex
      width={"100%"}
      h={"10vh"}
      border={"2px solid"}
      borderColor={"gray.300"}
      p={"4"}
      justify={"space-evenly"}
    >
      <IconButton
        icon={<GrBold />}
        aria-label="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        bg={editor.isActive("bold") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <IconButton
        aria-label="code"
        icon={<GrCode />}
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        bg={editor.isActive("code") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <IconButton
        aria-label="Blockquote"
        icon={<RiDoubleQuotesL />}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        bg={editor.isActive("blockquote") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <IconButton
        aria-label="Blockquote"
        icon={<ImItalic />}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        bg={editor.isActive("blockquote") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <IconButton
        aria-label="codeBlock"
        icon={<BiCodeBlock />}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        bg={editor.isActive("codeBlock") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <IconButton
        aria-label="listItem"
        icon={<FaListUl />}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        bg={editor.isActive("bulletList") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <IconButton
        aria-label="orderedList"
        icon={<FaListOl />}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().splitListItem("listItem")}
        bg={editor.isActive("orderedList") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <Popover>
        <PopoverTrigger>
          <IconButton icon={<FaHeading />} aria-label="Heading" />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />

          <PopoverBody fontWeight={"700"}>
            <Text fontSize={"4xl"}> H1</Text>
            <Text fontSize={"2xl"}>H2</Text>
            <Text fontSize={"1xl"}> H3</Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
export default ToolKit;
