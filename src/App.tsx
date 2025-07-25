import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { HomePage } from './pages/home/home-page';
import { Layout } from './pages/layout/layout';
import { PizzasPage } from './pages/pizzas/pizzas-page';

const queryClient = new QueryClient()
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route element={<HomePage />} index />
              <Route element={<PizzasPage />} path='/pizzas' />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
