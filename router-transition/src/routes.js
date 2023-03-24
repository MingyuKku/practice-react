import { lazy } from "react";

import Index from './pages/Index';
import Admin from './pages/Admin';
const Faq = lazy(() => import('./pages/Faq'));
const Notice = lazy(() => import('./pages/Notice'));
const Qna = lazy(() => import('./pages/Qna'));
const Member = lazy(() => import('./pages/Member'));
const Second = lazy(() => import('./pages/second/Second'));

const Page1 = lazy(() => import('./pages/second/Page1'));
const Page2 = lazy(() => import('./pages/second/Page2'));
const Page3 = lazy(() => import('./pages/second/Page3'));

const routes = [
  {
    path: '/',
    name: 'index',
    element: <Index />,
    type: 'public'
  },
  {
    path: '/admin',
    name: 'admin',
    element: <Admin />,
    type: 'private',
  },
  {
    path: '/faq',
    name: 'faq',
    element: <Faq />,
    type: 'private',
  },
  {
    path: '/notice',
    name: 'notice',
    element: <Notice />,
    type: 'private',
  },
  {
    path: '/qna',
    name: 'qna',
    element: <Qna />,
    type: 'private',
  },
  {
    path: '/member',
    name: 'member',
    element: <Member />,
    type: 'private',
  },
  {
    path: '/second',
    name: 'second',
    element: <Second />,
    type: 'private',
    children: [
      {
        path: 'page1',
        name: 'page1',
        element: <Page1 />,
        type: 'private',},
      {
        path: 'page2',
        name: 'page2',
        element: <Page2 />,
        type: 'private',
      },
      {
        path: 'page3',
        name: 'page3',
        element: <Page3 />,
        type: 'private',
      },
    ]
  },
]

export default routes;

