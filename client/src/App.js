import {BrowserRouter, Routes, Route} from "react-router-dom"
import Game from "./pages/Game"
import Home from "./pages/Home"

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App