import { Flex, Text, Image } from "@chakra-ui/react";

const BlogParser: React.FC = () => {
  return (
    <>
      <Flex mt={"10"} flexDir={"column"}>
        <Image alt={"imageName"} src={"/blogsample.png"} />

        <Text textAlign={"left"} px={"4"}>
          What Is Meant By Lorem Ipsum In Website? The word Lorem Ipsum is
          derived from the Latin word which means “pain itself”. It is a kind of
          a text filler tool that is used by the webmaster on the website.
          Basically, this tool is used to create dummy content on the website
          when it’s new. Why Lorem Ipsum Is Used? It helps the designer plan
          where the content will sit. It helps in creating drafts of the content
          on the pages of the website. It originates from the Latin text but is
          seen as gibberish. Sometimes, the reader gets distracted while
          creating or working on the website. That’s why this language is
          important. This tool makes the work easier for the webmaster. How
          Lorem Ipsum Can Be Used? When using Lorem Ipsum for creating dummy
          content for your newly created website, you can select the text
          formats you want from the tool. Like, words, sentences, or paragraphs.
          Then, you can select whether you want HTML markup in your dummy
          content or not Then, you can choose the number of words and paragraphs
          for your dummy content and execute the plan accordingly. You can use
          this tool at incrementors.com for free. How Can I Use Lorem Ipsum Tool
          For My Website? You can click on the ‘item to generate’ column and
          select the format you want content in. Below that, you can select if
          you want an HTML tag in your content or not After that, you can choose
          how many paragraphs you want in the ‘how many items to generate’
          column. Then, you can choose the minimum and maximum words you want
          per sentence. Later, you can select the minimum and maximum sentences
          you want per paragraph. Finally, click on the button ‘generate’
          Taddalaa! You got your Lorem Ipsum content for your website.
        </Text>
      </Flex>
    </>
  );
};

export default BlogParser;
