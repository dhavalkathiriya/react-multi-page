import React,{useEffect} from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from './context';


const About = () =>{

  // const data ={
  //   name:"lalji",
  //   image:"../images/about.svg"
  // }

  const {updateAboutPage} =useGlobalContext();

  useEffect(() => updateAboutPage(),[]);
  // return <HeroSection {...data}/>;
  return <HeroSection />;
}

export default About
