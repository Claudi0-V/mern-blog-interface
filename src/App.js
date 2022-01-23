import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <ChakraProvider resetCSS>
        <Navbar />
        <h1>hello world</h1>
        <Routes>
          <Route path="/" />
          {/*        <Route path="/" element={<Home />} />*/}
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
