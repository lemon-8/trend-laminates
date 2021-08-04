import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './Content';
import Hero from './Hero';
import Cursor from './Cursor';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Logo from './images/logoblack.png';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  });
  return (
    <div>
      {loading ?
      <div className="flex flex-col items-center justify-center h-screen"> 
      <img src={Logo} alt="Logo" className="mb-10" />
      <Loader
        type="TailSpin"
        color="#000"
        height={100}
        width={100}
        timeout={3000}
      />
      </div> 
      : <div>
        <Cursor />
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </div>
      }
    </div>
  );
};

export default App;