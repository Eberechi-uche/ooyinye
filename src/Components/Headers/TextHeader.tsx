import { Text } from "@chakra-ui/react";
type HeadTextProps = {
  text: string;
};
const TextHeader: React.FC<HeadTextProps> = ({ text }) => {
  return (
    <>
      <Text
        fontSize={"md"}
        fontWeight={"500"}
        textTransform={"capitalize"}
        textAlign={"left"}
      >
        {text}
      </Text>
    </>
  );
};
export default TextHeader;
