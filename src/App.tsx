import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { MainSwitcher } from './components/MainSwitcher';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';

axios.defaults.baseURL = 'http://127.0.0.1:8000'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})


function App() {
  
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div>
          <MainSwitcher />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
