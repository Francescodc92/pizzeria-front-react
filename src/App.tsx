import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { HomePage } from './pages/home/home-page';
import { Layout } from './pages/layout/layout';
import { PizzasPage } from './pages/pizzas/pizzas-page';
import { SinglePizzaPage } from './pages/single-pizza/single-pizza-page';

const queryClient = new QueryClient()
function App() {



  return (
    <div className='relative'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route element={<HomePage />} index />
              <Route element={<PizzasPage />} path='/pizzas' />
              <Route element={<SinglePizzaPage />} path='/pizzas/:pizzaId' />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
