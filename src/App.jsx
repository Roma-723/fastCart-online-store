import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/error/error'
import Layout from './layout/layout'
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Detalist from './pages/detalist/detalist';
import Product from './pages/products/product';
import Wishilist from './pages/wishilist/wishilist';
import CheckOut from './pages/checkOut/checkOut';
import Account from './pages/account/account';
import Card from './pages/cart/card';
import Login from './pages/auth/login/login';
import Registration from './pages/auth/registration/registration';

const App = () => {
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "singup",
          element: <Registration />
        },
        {
          path: "/detalist/:id",
          element: <Detalist />
        },
        {
          path: "products",
          element: <Product />
        },
        {
          path: "wishlist",
          element: <Wishilist />
        },
        {
          path: "checkout",
          element: <CheckOut />
        },
        {
          path: "account",
          element: <Account />
        },
        {
          path: "cart",
          element: <Card />
        },
        {
          path: "login",
          element: <Login />
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}
export default App
