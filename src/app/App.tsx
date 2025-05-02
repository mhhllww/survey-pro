import { RouteProvider } from './route-provider';
import { Toaster } from '@/shared/ui/toast/toast';
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux/store.ts';

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <RouteProvider />
    </Provider>
  );
}

export default App;
