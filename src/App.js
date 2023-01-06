import './App.css';
import Home from './Views/Home';
import {Routes, Route} from 'react-router-dom'
import Header from './Views/Header';
import Footer from './Views/Footer';
import Nav from './Views/Nav';

function App() {
  return (
    <div className="App">
      <div className="topSecion">
          <Header />
          <Nav />
        </div>


      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<div>Booking</div>} />

      </Routes>


      <Footer />
    </div>
  );
}

export default App;
