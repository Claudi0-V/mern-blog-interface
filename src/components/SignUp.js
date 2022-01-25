import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import Main from "./Main";

export default function SingUp() {
  return (
    <Main px={{ base: "3%" }} justify="center" bg={"gray.50"}>
      <Heading fontSize={"4xl"} textAlign={"center"} mb={3}>
        Sign up
      </Heading>
      <Stack
        as="form"
        p={10}
        spacing={4}
        rounded={"lg"}
        bg="white"
        boxShadow="base"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
      >
        <FormControl isRequired >
          <FormLabel htmlFor="email" mb={0.5}>Email address</FormLabel>
          <Input id="email" name="email" type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password" mb={0.5}>Password</FormLabel>
          <Input id="password" name="password" type="password" />
        </FormControl>
        <FormControl isRequired >
          <FormLabel htmlFor="password" mb={0.5}>Confirm Password</FormLabel>
          <Input id="password" name="password" type="password" />
        </FormControl>
        <Button type="submit" bg="blue.600" color="white">
          Sign-In
        </Button>
      </Stack>
    </Main>
  );
}
