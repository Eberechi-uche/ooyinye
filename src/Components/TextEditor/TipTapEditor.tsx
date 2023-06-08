import ListItem from "@tiptap/extension-list-item";
import { useEditor, EditorContent } from "@tiptap/react";
import OrderedList from "@tiptap/extension-ordered-list";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import CharacterCount from "@tiptap/extension-character-count";
import StarterKit from "@tiptap/starter-kit";
import ToolKit from "./TipTapToolKit";
import "./EditorStyle.module.css";
import { Text } from "@chakra-ui/react";
const test = ``;
const TipEditor: React.FC = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "TipTap-editor",
      },
    },
    extensions: [
      //
      Blockquote.configure({
        HTMLAttributes: {
          className: "quotes",
        },
      }),
      StarterKit,
      ListItem,
      CodeBlock.configure({
        exitOnTripleEnter: true,
      }),
      OrderedList,
      CharacterCount.configure({
        limit: null,
      }),
    ],
    content: test,
  });
  return (
    <div className="test">
      <ToolKit editor={editor} />
      <EditorContent editor={editor} />
      <Text></Text>
    </div>
  );
};
export default TipEditor;
