import { lazyImport } from '@/utils/lazyImport';
import { useRoutes } from 'react-router-dom';

const { Home } = lazyImport(() => import('@/features/Home'), 'Home');
const { About } = lazyImport(() => import('@/features/About'), 'About');
const { AboutChild1 } = lazyImport(() => import('@/features/About/components'), 'AboutChild1');
const { AboutChild2 } = lazyImport(() => import('@/features/About/components'), 'AboutChild2');
const { Elasticsearch } = lazyImport(() => import('@/features/Elasticsearch'), 'Elasticsearch');
const { NotFound } = lazyImport(() => import('@/features/misc/NotFound'), 'NotFound');

export const AppRoutes = () => {
  const routes = [
    { path: '/', element: <Home /> },
    {
      path: '/about',
      element: <About />,
      children: [
        { path: '', element: <AboutChild1 /> },
        { path: 'about1', element: <AboutChild1 /> },
        { path: 'about2', element: <AboutChild2 /> },
      ],
    },
    { path: '/elastic', element: <Elasticsearch /> },
    { path: '*', element: <NotFound /> },
  ];

  const element = useRoutes([...routes]);

  return element;
};
