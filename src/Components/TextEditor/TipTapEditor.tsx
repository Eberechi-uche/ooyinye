import ListItem from "@tiptap/extension-list-item";
import { useEditor, EditorContent } from "@tiptap/react";
import OrderedList from "@tiptap/extension-ordered-list";
import CodeBlock from "@tiptap/extension-code-block";
import Italic from "@tiptap/extension-italic";
import Blockquote from "@tiptap/extension-blockquote";
import CharacterCount from "@tiptap/extension-character-count";
import StarterKit from "@tiptap/starter-kit";
import ToolKit from "./TipTapToolKit";
import "./EditorStyle.module.css";
import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import Heading from "@tiptap/extension-heading";
import { BsArrowBarRight } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { draftAtom } from "@/Atoms/DraftAtom";
import { useEffect } from "react";
const test = ``;

type TipEditorProps = {
  saveArticle: (e: string) => void;
  isLoading: boolean;
  preview: (e: string) => void;
};
const TipEditor: React.FC<TipEditorProps> = ({
  saveArticle,
  isLoading,
  preview,
}) => {
  const [draftContent] = useRecoilState(draftAtom);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "TipTap-editor",
      },
    },
    extensions: [
      //

      StarterKit,
    ],
    content: "",
  });
  useEffect(() => {
    const { articleContent } = draftContent;
    if (editor && draftContent.articleContent) {
      console.log("i ran");
      editor.commands.setContent(articleContent);
      return;
    }
  }, [editor]);
  return (
    <div className="test">
      <ToolKit editor={editor} />
      <EditorContent editor={editor} />
      <Text></Text>
      <Flex flexDir={"column"} my={"5"}>
        <Flex my={"5"} justify={"space-between"} alignSelf={"flex-end"}>
          <Button
            colorScheme="blackAlpha"
            variant={"solid"}
            color={"#fff"}
            bg={"blackAlpha.900"}
            onClick={() => {
              let articleHTML = editor?.getHTML()!;
              saveArticle(articleHTML);
            }}
            isLoading={isLoading}
            mr={"5"}
          >
            save Article
          </Button>
          <Button
            colorScheme="green"
            variant={"outline"}
            borderRadius={"full"}
            onClick={() => {
              let articleHTML = editor?.getHTML()!;
              preview(articleHTML);
            }}
          >
            Preview & Publish
            <Icon as={BsArrowBarRight} fontSize={"2xl"} ml={"2"} />
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};
export default TipEditor;
