import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Web3Provider } from "./contexts/Web3Context"
import Home from "./layouts/Home"
import Page404 from "./layouts/Page404"

const App = () => {
  return (
    <Web3Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Web3Provider>
  )
}

export default App
