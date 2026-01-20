import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Error from './pages/error/error'
import Layout from './layout/layout'
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Sign from './pages/sign/sign';
import Detalist from './pages/detalist/detalist';
import Product from './pages/products/product';
import Wishilist from './pages/wishilist/wishilist';
import CheckOut from './pages/checkOut/checkOut';
import Account from './pages/account/account';
import Card from './pages/cart/card';
import Login from './pages/login/login';

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
          element: <Sign />
        },
        {
          path: "detalist",
          element: <Detalist />
        },
        {
          path: "products",
          element: <Product />
        },
        {
          path: "wishilist",
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
}

export default App
