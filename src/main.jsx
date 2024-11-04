import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Shop from './pages/shop/Shop.jsx';
import Blog from './pages/blog/Blog.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/about/About.jsx';
import SingleProduct from './pages/shop/SingleProduct.jsx';
import CartPage from './pages/shop/CartPage.jsx';
import SingleBlog from './pages/blog/SingleBlog.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import ErrorPage from './components/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "shop/:id",
        element: <SingleProduct />
      },
      {
        path: "/cart-page",
        element: <PrivateRoute><CartPage /></PrivateRoute>
      },
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "sign-up",
    element: <SignUp />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
