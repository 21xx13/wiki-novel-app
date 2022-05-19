import './App.css';
import {Catalog} from './components/CatalogComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter} from 'react-router-dom';
import { Header } from './components/HeaderComponent';
import { MainBanner } from './components/MainBanner';
import { NOVELS } from './shared/novels';
import { COMMENTS } from './shared/comments'
import { NovelDetail } from './components/novels/NovelDetail';
import { Sidebar } from './components/SidebarComponent';
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
