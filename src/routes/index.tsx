import { Home } from '@/features/Home';
import { NotFound } from '@/features/misc';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFound /> },
  ];

  const element = useRoutes([...routes]);

  return element;
};
