import { NotFound } from '@/features/misc';
import { createBrowserRouter } from 'react-router-dom';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { Home } = await import('@/features/Home');
        return { Component: Home };
      },
      errorElement: <NotFound />,
    },
    {
      path: '/about',
      lazy: async () => {
        const { About } = await import('@/features/About');
        return { Component: About };
      },
      children: [
        {
          path: '',
          lazy: async () => {
            const { AboutChild1 } = await import('@/features/About/components/AboutChild1');
            return { Component: AboutChild1 };
          },
        },
        {
          path: 'about1',
          lazy: async () => {
            const { AboutChild1 } = await import('@/features/About/components/AboutChild1');
            return { Component: AboutChild1 };
          },
        },
        {
          path: 'about2',
          lazy: async () => {
            const { AboutChild2 } = await import('@/features/About/components/AboutChild2');
            return { Component: AboutChild2 };
          },
        },
      ],
    },
    {
      path: 'elastic',
      lazy: async () => {
        const { Elasticsearch } = await import('@/features/Elasticsearch');
        return { Component: Elasticsearch };
      },
    },
  ]);
};
