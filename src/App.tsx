import './App.css';
import Main from './components/MainComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/HeaderComponent';
import { MainBanner } from './components/MainBanner';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <MainBanner />
      <Main/>
     
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
