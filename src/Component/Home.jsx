import React,{useEffect} from 'react'
import { useGlobalContext } from './context';
import HeroSection from './HeroSection'

const Home = () => {
    
  // const data ={
  //   name:"dhaval",
  //   image:"../images/hero.svg"
  // }

  const { updateHomePage } = useGlobalContext();
  
useEffect(() => updateHomePage(),[]);
  // return <HeroSection {...data}/>;
  return <HeroSection />;
}

export default Home
