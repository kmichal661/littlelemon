import './App.css';
import Header from './Views/Header';
import Footer from './Views/Footer';
import Main from './Views/Main';
import Nav from './Views/Nav';

function App() {
  return (
    <div className="App">
      <>
      <div className="topSecion">
        <Header />
        <Nav />
      </div>
      

      <Main className="mainSection" />

      <Footer className="footerSection" />
      </>
    </div>
  );
}

export default App;
