import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/navbar";
import SingUp from "./components/SignUp";
import Login from "./components/Login";
import Homepage from "./components/Homapage";

function App() {
  return (
    <Router>
      <ChakraProvider resetCSS>
        <Navbar h="10vh" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user/sign-up" element={<SingUp />} />
          <Route path="/user/login" element={<Login />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
