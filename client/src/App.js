import {BrowserRouter, Routes, Route} from "react-router-dom"
import Game from "./pages/Game"
import Home from "./pages/Home"
import Help from "./pages/Help"

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/help" element={<Help />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App