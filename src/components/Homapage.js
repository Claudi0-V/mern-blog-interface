import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Main from "./Main";

function SmallBlogCards(props) {
  const { imgSrc, heading, commentAmount, summary, link, ...other } = props;

  return (
    <HStack w="100%" maxW="500px"  boxShadow='md' bg="white" padding={2}>
      <HStack spacing={2} w="100%" h="100%" {...other}>
        <Box borderRadius="md" position="relative" overflow="hidden" flex="1">
          <Link
            as={RouterLink}
            to="/user/sign-up"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
          ></Link>
          <Image
            src={imgSrc}
            maxW="300px"
            maxH="175px"
            w="100%"
            h="100%"
            objectFit="cover"
            align="right bottom"
          />
        </Box>
        <VStack
          flex="1"
          wordBreak="break-word"
          h="100%"
          justify="space-between"
        >
          <Heading as="h3" fontSize="md">
            {heading}
          </Heading>
          <Text as="p">{summary} </Text>
          <Text>comments: {commentAmount}</Text>
        </VStack>
      </HStack>
    </HStack>
  );
}

export default function Homepage() {
  return (
    <Main>
      <VStack w="100%">
        <HStack w="100%" maxW="500px">
          <Heading as="h2" fontSize="md" marginTop="5">
            Latest Posts
          </Heading>
          <Divider maxW="500px" />
        </HStack>
        <SmallBlogCards
          heading="Little Baby"
          summary="A baby that is little and dressed"
          commentAmount={5}
          imgSrc="https://images.unsplash.com/photo-1643992516483-99eba6d5a6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80"
        />
        <SmallBlogCards
          heading="OMG Ubuntu Image"
          summary="An image from the most prolific UbuntuOS news"
          commentAmount={5}
          imgSrc="https://images-ext-1.discordapp.net/external/qWrPcjGOUfVgFvvwgUXkSer7HIZsiJ0GzMNyrT2N5Bw/https/149366088.v2.pressablecdn.com/wp-content/uploads/2021/04/omg-polaroid.jpg?width=400&height=229"
        />
        <SmallBlogCards
          heading="Just an beach"
          summary="An beach with an bunch of people probably"
          commentAmount={5}
          imgSrc="https://images.unsplash.com/photo-1643892593347-d19c62b8cea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
      </VStack>
    </Main>
  );
}
