import HeroSection from '../../HeroSection'
import React from 'react'
import {homeObjOne} from './Data'

const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne} />   
        </>
    )
}

export default Home
