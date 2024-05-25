import { About } from '@/features/About';
import { AboutChild1, AboutChild2 } from '@/features/About/components';
import { Home } from '@/features/Home';
import { NotFound } from '@/features/misc';
import { useRoutes } from 'react-router-dom';

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
    { path: '*', element: <NotFound /> },
  ];

  const element = useRoutes([...routes]);

  return element;
};
