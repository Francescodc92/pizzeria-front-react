import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { FooterComponent } from "./pages/home/components/footer/footer-component";
import { HeaderComponent } from "./pages/home/components/header/header-component";
import { HomePage } from './pages/home/home-page';

const queryClient = new QueryClient()
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <HeaderComponent />
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage />} index />
          </Routes>
        </BrowserRouter>
        <FooterComponent />
      </QueryClientProvider>
    </>
  )
}

export default App
