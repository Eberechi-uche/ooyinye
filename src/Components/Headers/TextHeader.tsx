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
        my={"4"}
        borderBottom={"5px solid"}
      >
        {text}
      </Text>
    </>
  );
};
export default TextHeader;
