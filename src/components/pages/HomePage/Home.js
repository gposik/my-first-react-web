import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

import HeroSection from '../../HeroSection'
import React from 'react'

const Home = () => {
    return (
      <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjFour} />
      </>
    );
}

export default Home
