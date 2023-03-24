import { lazy } from "react";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/products/Products';
import Footer from './pages/Footer';

import Product1 from './pages/products/Product1';
import Product2 from './pages/products/Product2';
import Product3 from './pages/products/Product3';

// const About = lazy(() => import('./pages/About'));
// const Contact = lazy(() => import('./pages/Contact'));
// const Products = lazy(() => import('./pages/products/Products'));
// const Footer = lazy(() => import('./pages/Footer'));

// const Product1 = lazy(() => import('./pages/products/Product1'));
// const Product2 = lazy(() => import('./pages/products/Product2'));
// const Product3 = lazy(() => import('./pages/products/Product3'));

const routes = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
  },
  {
    path: '/about',
    name: 'about',
    element: <About />,
  },
  {
    path: '/contact',
    name: 'contact',
    element: <Contact />,
  },
  {
    path: '/footer',
    name: 'footer',
    element: <Footer />,
  },
  {
    path: '/products',
    name: 'products',
    element: <Products />,
    children: [
      {
        path: 'product-1',
        name: 'product1',
        element: <Product1 />,
      },
      {
        path: 'product-2',
        name: 'product2',
        element: <Product2 />,
      },
      {
        path: 'product-3',
        name: 'product3',
        element: <Product3 />,
      },
    ]
  },
]

export default routes;