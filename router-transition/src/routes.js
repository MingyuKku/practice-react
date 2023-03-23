import { lazy } from "react";

import Index from './pages/Index';
import Admin from './pages/Admin';
const Faq = lazy(() => import('./pages/Faq'));
const Notice = lazy(() => import('./pages/Notice'));
const Qna = lazy(() => import('./pages/Qna'));
const Member = lazy(() => import('./pages/Member'));

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
    children:[
      {
        path: 'faq',
        name: 'faq',
        element: <Faq />,
        type: 'private',
      },
      {
        path: 'notice',
        name: 'notice',
        element: <Notice />,
        type: 'private',
      },
      {
        path: 'qna',
        name: 'qna',
        element: <Qna />,
        type: 'private',
      },
      {
        path: 'member',
        name: 'member',
        element: <Member />,
        type: 'private',
      },
    ]
  },
  
]

export default routes;

