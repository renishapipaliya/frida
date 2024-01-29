import React from 'react'
import "../App.css";


import Lower from "../Components/Lower";
import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import Text from "../Components/Text";
import Main from "../Components/Main";
import Moto from "../Components/Moto";
import Imfinix from "../Components/Imfinix";
import Realme from "../Components/Realme";
import Feedback from "../Components/Feedback";
import Upcoming from "../Components/Upcoming";
import Vs from "../Components/Vs";
import Footer from "../Components/Footer";

function Home({item,handleClick}) {
  return (
    <>
    
    
  
      <Hero />
      <Cards item={item} handleClick={handleClick} />
      <Text />
      <Main />
      <Moto />
      <Imfinix />
      <Realme />
      <Feedback />
      <Upcoming />
      <Vs />
      <Footer />
      
    </>
  );
}

export default Home