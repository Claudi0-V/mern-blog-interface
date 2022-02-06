import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Button,
  Textarea,
  Box,
} from "@chakra-ui/react";
import Main from "./Main";

export default function NewBlog() {
  return (
    <Main px={{ base: "3%" }} align="center">
      <Heading fontSize={"4xl"} textAlign={"center"} mb={3}>
        New Blog
      </Heading>
      <Stack
        as="form"
        p={10}
        maxW="800px"
        w="100%"
        minH="70vh"
        rounded={"lg"}
        bg="white"
        boxShadow="base"
        justify={"space-between"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
      >
        <Box h="90%">
          <FormControl isRequired mb="15px">
            <FormLabel htmlFor="title" mb={0.5}>
              Title
            </FormLabel>
            <Input id="title" name="title" type="text" />
          </FormControl>
          <FormControl isRequired h="100%" maxH="99%" overflowY="scroll">
            <FormLabel htmlFor="content" mb={0.5}>
              Content
            </FormLabel>
            <Textarea id="content" name="content" resize="none" minH="70%"/>
          </FormControl>
        </Box>
        <Button type="submit" bg="blue.600" color="white">
          Submit
        </Button>
      </Stack>
    </Main>
  );
}
