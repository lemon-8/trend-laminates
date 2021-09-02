import React from 'react';
import Navbar from './components/Navbar';
import Hero from './Hero';
import Cursor from './Cursor';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Logo from './images/logoblack.webp';
import Products from './Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Catalogues from './Catalogues';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [loading]);
  
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
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Hero} />
              <Route path="/Products" component={Products} />
              <Route path="/Catalogues" component={Catalogues} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
            </Switch>
            <Footer />
          </Router>
        </div>
      }
    </div>
  );
};

export default App;