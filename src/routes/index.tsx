import { Home } from '@/features/Home';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const routes = [{ path: '/', element: <Home /> }];

  const element = useRoutes([...routes]);

  return element;
};
