import { useEffect } from 'react'
import Navbar from "../components/Navbar/index";



const Home = () => {
  const animateUnderbar = () => {
    let underbar = document.querySelector('.animated')
    console.log(underbar)
    let animate = true;
    
  }
  useEffect(() => {
    animateUnderbar()
  }, [])
  return (
    <div className="home">
      <Navbar />
      <div className="soon">
        <img
          src="/img/logo.png"
          width="400px"
          height="400px"
          alt="Complette Web"
        />
        <div className="go-complette">
          <h1 className="complette-soon-title">Em breve<span className="animated">_</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
