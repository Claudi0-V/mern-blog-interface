import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, MenuIcon, Text } from "@chakra-ui/react";

function Logo() {
  return <Text>Logo</Text>;
}

function AuthSection({ isLogged }) {
  return (
    <>
      {isLogged ? (
        <AuthButton>Logoff</AuthButton>
      ) : (
        <Box>
          <AuthButton mr="2">Login</AuthButton>
          <AuthButton>Sign-Up</AuthButton>
        </Box>
      )}
    </>
  );
}

function AuthButton(props) {
  return <Button {...props}>{props.children}</Button>;
}

function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
}

export default function Navbar({ user }) {

  return (
    <Flex as="header" justify="space-between" padding="2">
      <Logo />
      <AuthSection isLogged={false} />
      <MenuToggle />
    </Flex>
  );
}
