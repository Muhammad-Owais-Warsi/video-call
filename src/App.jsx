import { BrowserRouter, Routes,Route } from "react-router-dom"
import Entry from "./components/entry"
import Lobby from "./components/lobby"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Entry />} />
          <Route path="/lobby/:room/:id" element={<Lobby />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
