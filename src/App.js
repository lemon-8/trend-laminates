import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './Content';
import Hero from './Hero';
import Cursor from './Cursor';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { MdRecentActors } from 'react-icons/md';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  });
  return (
    <div>
      {loading ?
      <div className="flex items-center justify-center h-screen"> 
      <Loader
        type="Grid"
        color="#00BFFF"
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