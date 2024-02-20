import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Box, VStack } from "@chakra-ui/react";
import Action from "./pages/Action";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <VStack bg="#F4F3F2">
        <NavBar />

        <Box height="100%">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/action" element={<Action />} />
          </Routes>
        </Box>

        <Footer footText="Contact" />
      </VStack>
      
    </>
  );
}

export default App;
