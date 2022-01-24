import { Flex } from "@chakra-ui/react";

export default function Main(props) {
  return (
    <Flex
      as="main"
      padding={{ base: "3%", md: "5%" }}
      direction="column"
      align="center"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
