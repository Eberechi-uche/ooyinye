import { Text } from "@chakra-ui/react";
type HeadTextProps = {
  text: string;
};
const TextHeader: React.FC<HeadTextProps> = ({ text }) => {
  return (
    <>
      <Text
        fontSize={"xl"}
        fontWeight={"600"}
        color={"gray.800"}
        textAlign={"left"}
      >
        {text}
      </Text>
    </>
  );
};
export default TextHeader;
