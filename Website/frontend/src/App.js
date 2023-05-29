import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProducsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:_id" element={<ProducsPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
