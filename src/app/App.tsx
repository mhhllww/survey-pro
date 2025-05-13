import { RouteProvider } from './providers/route-provider.tsx';
import { Toaster } from '@/shared/ui/toast/toast';
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux/store.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/query-client.ts';

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouteProvider />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
