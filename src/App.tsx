import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Box } from "@chakra-ui/react"
import Action from "./pages/Action"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
<>
    <NavBar />

<Box>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/action" element={<Action />} />
     </Routes>
     
</Box>
<Footer />

  </>
  )
}

export default App