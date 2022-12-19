import React from 'react'
import './hero.scss'
import HeroImage from '../../assets/hero image.png'


const Hero = () => {
  return (
    <div  className='hero'>
      <h1>Watch <br/> Something <br/> Incredible.</h1>
        <img src={HeroImage} alt="HeroImage"/>
    </div>
  )
}

export default Hero