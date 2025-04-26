import { RouteProvider } from './route-provider';
import { Toaster } from '@/shared/ui/toast/toast';

function App() {
  return (
    <>
      <Toaster />
      <RouteProvider />
    </>
  );
}

export default App;
