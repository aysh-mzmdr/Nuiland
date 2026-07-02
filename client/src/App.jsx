import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = () => <div>Home</div>
const NotFound = () => <div>404 - Not Found</div>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
