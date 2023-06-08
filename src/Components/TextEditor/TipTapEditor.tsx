import { Button, Flex, IconButton } from "@chakra-ui/react";
import { TbLetterB, TbCode, TbQuote } from "react-icons/tb";
import { useEditor, EditorContent } from "@tiptap/react";
import Blockquote from "@tiptap/extension-blockquote";
import StarterKit from "@tiptap/starter-kit";
import "./EditorStyle.module.css";
const test = ``;
const TipEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      //
      Blockquote.configure({
        HTMLAttributes: {
          className: "quotes",
        },
      }),
      StarterKit,
    ],
    content: test,
  });
  return (
    <div className="test">
      <ToolKit editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
export default TipEditor;

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
      h={"20vh"}
      border={"2px solid"}
      borderColor={"gray.300"}
      p={"4"}
      justify={"space-evenly"}
    >
      <IconButton
        icon={<TbLetterB />}
        aria-label="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        bg={editor.isActive("bold") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <IconButton
        aria-label="code"
        icon={<TbCode />}
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        bg={editor.isActive("code") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
      <IconButton
        aria-label="Blockquote"
        icon={<TbQuote />}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        bg={editor.isActive("blockquote") ? `${active}` : `${inActive}`}
        colorScheme={colorScheme}
      />
    </Flex>
  );
};
