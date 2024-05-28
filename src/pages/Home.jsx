import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import { baseURL } from '../constants/constants'
import Enrolls from '../components/Enrolls/Enrolls'
import Landing from '../components/Landing page/Landing'

function Home() {
  // eslint-disable-next-line
 
  return (
    <>
      <Navigation />

      <br /><br /><br /> {/*
        <input type='button' value="authntictn" onClick={handleSession} /> */}
        <Landing/>
   

    </>
  )
}

export default Home