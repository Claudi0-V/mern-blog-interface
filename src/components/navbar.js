import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Text as="h2" fontSize="xl" fontWeight="600">
      MyBlog
    </Text>
  );
}

function MenuLink(props) {
  return (
    <Button as={Link} m="1" {...props}>
      {props.children}
    </Button>
  );
}

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="header"
      justify="space-between"
      padding="2"
      direction={["column", "column", "row"]}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor="gray.200"
    >
      <Flex justify={{ base: "space-between" }} align="center">
        <Logo />
        <Button display={["block", "block", "none"]} onClick={toggleOpen}>
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Button>
      </Flex>

      
        <Flex
          as="nav"
          display={{ base: isOpen ? "flex" : "none", md: "block" }}
          direction={["column", "column"]}
        >
          <MenuLink to="/user/sign-up" variant={"link"} color="blue.600">
            Sign-Up
          </MenuLink>
          <MenuLink
            to="/user/login"
            bg="blue.400"
            color="white"
            _hover="blue.300"
          >
            Login
          </MenuLink>
        </Flex>
    </Flex>
  );
}
