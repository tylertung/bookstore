import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Books from '../components/books/Books'
import Navbar from '../components/navbar/Navbar'
function Home() {
  


  return (
    <>
      <Navbar></Navbar>
      <Books></Books>
    </>
    
  )
}

export default Home