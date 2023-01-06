import './App.css';
import Home from './Views/Home';
import {Routes, Route} from 'react-router-dom'
import Header from './Views/Header';
import Footer from './Views/Footer';
import Nav from './Views/Nav';
import BookingPage from './Views/BookingPage';
import ConfirmedBooking from './Views/ConfirmedBooking'
import { ChakraProvider } from "@chakra-ui/react";
import {useState} from 'react'


function App() {

  return (
    <div className="App">

      

      <ChakraProvider>
      <div className="topSecion">
          <Header />
          <Nav />
        </div>


      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking/confirmed" element={<ConfirmedBooking />} />

      </Routes>


      <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
