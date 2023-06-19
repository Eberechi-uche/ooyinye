import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import ToolKit from "./TipTapToolKit";
import "./EditorStyle.module.css";
import { Button, Flex, Icon, Text } from "@chakra-ui/react";

import { BsArrowBarRight } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { draftAtom } from "@/Atoms/DraftAtom";
import { useEffect } from "react";
import CharacterCount from "@tiptap/extension-character-count";

type TipEditorProps = {
  saveArticle: (e: string, readTime: number) => void;
  isLoading: boolean;
  preview: (e: string, readTime: number) => void;
};
const TipEditor: React.FC<TipEditorProps> = ({
  saveArticle,
  isLoading,
  preview,
}) => {
  const [draftContent, setDraftContent] = useRecoilState(draftAtom);
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "TipTap-editor",
      },
    },
    extensions: [
      //

      CharacterCount.configure({
        mode: "nodeSize",
      }),

      StarterKit,
    ],
    content: "",
  });
  useEffect(() => {
    const { articleContent } = draftContent;
    if (editor && draftContent.articleContent) {
      editor.commands.setContent(articleContent);
      return;
    }
  }, [editor, draftContent]);
  return (
    <div className="test">
      <ToolKit editor={editor} />
      <EditorContent editor={editor} />
      <Text>
        Readtime:
        {editor && Math.round(editor.storage.characterCount.words() / 200)}
        mins
      </Text>
      <Flex flexDir={"column"} my={"5"}>
        <Flex my={"5"} justify={"space-between"} alignSelf={"flex-end"}>
          <Button
            colorScheme="blackAlpha"
            variant={"solid"}
            color={"#fff"}
            bg={"blackAlpha.900"}
            onClick={() => {
              let articleHTML = editor?.getHTML()!;
              let readTime =
                editor &&
                Math.round(editor.storage.characterCount.words() / 200);

              saveArticle(articleHTML, readTime!);
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
              setDraftContent((prev) => ({
                ...prev,
                articleContent: articleHTML,
              }));

              let readTime =
                editor &&
                Math.round(editor.storage.characterCount.words() / 200);
              preview(articleHTML, readTime!);
            }}
            isLoading={isLoading}
          >
            Preview & save
            <Icon as={BsArrowBarRight} fontSize={"2xl"} ml={"2"} />
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};
export default TipEditor;
