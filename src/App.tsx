import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Box } from "@chakra-ui/react"
import Action from "./pages/Action"

function App() {
  return (
<Box>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/action" element={<Action />} />
     </Routes>

  </Box>
  )
}

export default App