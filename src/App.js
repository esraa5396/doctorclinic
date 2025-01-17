import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbars from './Component/nav/Navbars';
import Home from './Pages/Home';

function App() {
  return (
    
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    

  );
}

export default App;
