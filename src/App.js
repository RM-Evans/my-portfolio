
import './App.css';
import './components/pages/Resume/Resume.css';
import './components/pages/About/About.css'
import './components/pages/Portfolio/Portfolio.css'

import NavState from './components/NavState';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <NavState />
      </div>
      <Footer />
    </>
  );
}

export default App;
