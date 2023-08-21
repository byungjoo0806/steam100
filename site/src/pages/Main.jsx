import React, { useEffect } from 'react';
import { Section } from '../components';
import { Link } from "react-router-dom";
import axios from "axios";
import SectionTop100 from '../components/section/SectionTop100';

export const Main = ({type}) => {
  useEffect(()=>{
    console.log(process.env.REACT_APP_BACKEND_SERVER)
  },[process.env.REACT_APP_BACKEND_SERVER])
  return (
    <div style={{width : "100%", height : "770px"}} className='Main'>
      <SectionTop100 />
    </div>
  )
  
};