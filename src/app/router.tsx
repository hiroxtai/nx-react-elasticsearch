import { About } from '@/features/About';
import { AboutChild1, AboutChild2 } from '@/features/About/components';
import { Elasticsearch } from '@/features/Elasticsearch';
import { Home } from '@/features/Home';
import { NotFound } from '@/features/misc';
import { createBrowserRouter } from 'react-router-dom';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: '/about',
      element: <About />,
      children: [
        {
          path: '',
          element: <AboutChild1 />,
        },
        {
          path: 'about1',
          element: <AboutChild1 />,
        },
        {
          path: 'about2',
          element: <AboutChild2 />,
        },
      ],
    },
    {
      path: 'elastic',
      element: <Elasticsearch />,
    },
  ]);
};
