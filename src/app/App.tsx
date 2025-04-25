import { RouteProvider } from './route-provider';
import { Toaster } from '@/shared/ui/alert/alert.tsx';

function App() {
  return (
    <>
      <Toaster />
      <RouteProvider />
    </>
  );
}

export default App;
