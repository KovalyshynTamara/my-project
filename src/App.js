
import './assets/css/App.scss';
import Header from './components/common/Header';
import ScrollToTop from './components/common/ScrollToTop';
import { Outlet } from 'react-router-dom';
import Footer from './components/common/Footer';
import MobileMenu from './components/MobileMenu';


function App() {
  return (
    <div className="App">
      <MobileMenu/>
      <Header />
      <Outlet />
      <ScrollToTop />
      <Footer/>
    </div>
  );
}

export default App;
