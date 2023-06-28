import { Text } from "@chakra-ui/react";
type HeadTextProps = {
  text: string;
};
const TextHeader: React.FC<HeadTextProps> = ({ text }) => {
  return (
    <>
      <Text
        fontSize={"3xl"}
        fontWeight={"900"}
        textTransform={"uppercase"}
        textAlign={"left"}
      >
        {text}
      </Text>
    </>
  );
};
export default TextHeader;
