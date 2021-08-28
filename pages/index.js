import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import Cursor from './Cursor';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Home() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    AOS.init();
  }, [loading]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  });
  return (
    <div>
      <Head>
        <title>Trend Laminates</title>
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <div>
        {loading ?
          <div className="flex flex-col items-center justify-center h-screen">
            <Image height="80" width="150" src="/logoblack.png" alt="Logo" className="mb-40" />
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
            <Footer />
          </div>
        }
      </div>
    </div>
  )
}
