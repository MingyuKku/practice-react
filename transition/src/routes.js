import { lazy } from "react";

import Index from './pages/Index';
import Admin from './pages/admin/Admin';
const Faq = lazy(() => import('./pages/admin/Faq'));
const Notice = lazy(() => import('./pages/admin/Notice'));
const Qna = lazy(() => import('./pages/admin/Qna'));
const Member = lazy(() => import('./pages/admin/Member'));

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

