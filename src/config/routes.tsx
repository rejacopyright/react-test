import {lazy} from 'react'

const routes : any[] = [
  { path: "/", exact: true, component: lazy(() => import('pages/home')) },
  { path: "/article", exact: true, component: lazy(() => import('pages/article')) },
  // 404
  { path: "*", exact: true, component: lazy(() => import('components/pageNotFound')) },
];

export default routes
