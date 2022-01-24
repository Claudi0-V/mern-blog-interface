import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <ChakraProvider resetCSS>
        <Navbar />
        <Main>
          <h1>hello world</h1>
          <h1>hello world</h1>
        </Main>
        <Routes>
          <Route path="/" />
          {/*        <Route path="/" element={<Home />} />*/}
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
