import { RouteProvider } from './providers/route-provider.tsx';
import { Toaster } from '@/shared/ui/toast/toast';
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux/store.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/query-client.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ContactDialog } from '@/components/dialog-contact/dialog-contact.tsx';

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        <Toaster />
        <ContactDialog />
        <RouteProvider />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
