import { Flex } from "@chakra-ui/react";

export default function Main(props) {
  return (
    <Flex
      as="main"
      h="90vh"
      padding="3%"
      direction="column"
      bg="gray.50"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
