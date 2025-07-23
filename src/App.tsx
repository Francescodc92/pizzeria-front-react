import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { FooterComponent } from './components/footer/footer-component';
import { GoUpButtonComponent } from './components/go-up-button/go-up-button';
import { HeaderComponent } from './components/header/header-component';
import { HomePage } from './pages/home/home-page';
import { PizzasPage } from './pages/pizzas/pizzas-page';

const queryClient = new QueryClient()
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route element={<HomePage />} index />
            <Route element={<PizzasPage />} path='/pizzas' />
          </Routes>
        </BrowserRouter>
        <GoUpButtonComponent />
        <FooterComponent />
      </QueryClientProvider>
    </>
  )
}

export default App
