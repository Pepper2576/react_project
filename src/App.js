import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/react_project' element={<Home />}></Route>
          <Route path='/portfolio' element={<Products />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
