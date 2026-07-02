import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./layouts/Home.jsx"
import Page404 from "./layouts/Page404.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
