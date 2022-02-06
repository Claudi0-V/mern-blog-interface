import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import SingUp from "./components/SignUp";
import Login from "./components/Login";
import Homepage from "./components/Homapage";
import NewBlog from "./components/NewBlog";

function App() {
  return (
    <Router>
      <ChakraProvider resetCSS>
        <Navbar h="10vh" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user/sign-up" element={<SingUp />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/new-blog" element={<NewBlog />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
