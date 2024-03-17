import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import WorldHeader from './Components/World Header/WorldHeader'
import useFetch from './hooks/UseFetch'
import HeroSection from './Components/HeroSection/HeroSection'

const App = () => {

  const data = useFetch('topstories/v2/world/europe.json?api-key=');

  // Log the data
  console.log(data);

  return (
    <>
  <Navbar/>
  <WorldHeader/>
  <HeroSection/>
  <Footer/>
    </>
  )
}

export default App