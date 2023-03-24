import { lazy } from "react";

const Page1 = lazy(() => import('./pages/second/Page1'));
const Page2 = lazy(() => import('./pages/second/Page2'));
const Page3 = lazy(() => import('./pages/second/Page3'));

const secondRoutes = [
  {
    path: 'second/page1',
    name: 'page1',
    element: <Page1 />,
    type: 'private',},
  {
    path: 'second/page2',
    name: 'page2',
    element: <Page2 />,
    type: 'private',
  },
  {
    path: 'second/page3',
    name: 'page3',
    element: <Page3 />,
    type: 'private',
  },
]

export default secondRoutes;

