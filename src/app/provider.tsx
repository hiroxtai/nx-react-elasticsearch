import * as React from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  // クエリした結果を保存するインスタンスを生成
  const queryCache = new QueryCache();
  // クエリのキャッシュに関する設定を持つインスタンスを生成
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 300000,
      },
    },
    queryCache,
  });

  return (
    <React.Suspense fallback={<div className="flex items-center justify-center w-screen h-screen">loading...</div>}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Suspense>
  );
};
