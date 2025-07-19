import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { HomePage } from './pages/home/home-page';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} index />
      </Routes>
    </BrowserRouter>
  )
}

export default App
