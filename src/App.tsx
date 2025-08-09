import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { CheckoutPage } from './pages/checkout/checkout-page';
import { PaymentCancelledPage } from './pages/checkout/payment-cancel';
import { PaymentSucceededPage } from './pages/checkout/payment-success';
import { HomePage } from './pages/home/home-page';
import { Layout } from './pages/layout/layout';
import { OrdersPage } from './pages/orders/orders-page';
import { PizzasPage } from './pages/pizzas/pizzas-page';
import ProtectedRoute from './pages/protected-route-middlewere/protected-route-component';
import { SinglePizzaPage } from './pages/single-pizza/single-pizza-page';
import { useUserStore } from './store/user-logged';

const queryClient = new QueryClient()
function App() {
  const loggedUser = useUserStore(state => state.loggedUser)
  return (
    <div className='relative'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route element={<HomePage />} index />
              <Route element={<PizzasPage />} path='/pizzas' />
              <Route element={<SinglePizzaPage />} path='/pizzas/:pizzaId' />
              <Route element={<ProtectedRoute isLoggedIn={!!loggedUser} />}>
                <Route element={<OrdersPage />} path='orders' />
              </Route>
              <Route element={<CheckoutPage />} path='/checkout' />
              <Route element={<PaymentSucceededPage />} path='/checkout/success/:sessionId' />
              <Route element={<PaymentCancelledPage />} path='/checkout/cancel' />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
