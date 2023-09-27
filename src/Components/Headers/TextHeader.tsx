import { Text } from "@chakra-ui/react";
type HeadTextProps = {
  text: string;
};
const TextHeader: React.FC<HeadTextProps> = ({ text }) => {
  return (
    <>
      <Text
        fontSize={"lg"}
        fontWeight={"500"}
        textTransform={"capitalize"}
        textAlign={"left"}
        p={"6"}
      >
        {text}
      </Text>
    </>
  );
};
export default TextHeader;
