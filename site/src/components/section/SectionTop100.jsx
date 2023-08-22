import React, { useState } from 'react';
import { SectionContainer, SectionHeader, SectionMain, SectionFooter, SectionHeaderH2, SectionHeaderP, SectionMainUl, FooterLink } from './Section.styled';
import SectionlistTop100 from './SectionlistTop100';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { loadingGIF2 } from "../../img";

const SectionTop100 = () => {
    const backend = process.env.REACT_APP_BACKEND_SERVER;

    const [isLoading, setIsLoading] = useState(false);
    const [newTenGames, setNewTenGames] = useState([]);

    const getTenMore = async ()=>{
      setIsLoading(true);
      const {data} = await axios.get(`${backend}/api/tenByTen`);
      console.log(data);
      setNewTenGames(data);
      setIsLoading(false);
    };

    return (
      <div style={{width : "100%", height : "100%", display : "flex", justifyContent : "space-evenly"}}>
          <SectionContainer>
              <SectionHeader>
                 <SectionHeaderH2>Steam Top 100</SectionHeaderH2>
                 <SectionHeaderP>Top 100 best Steam games of all time according to gamer reviews.</SectionHeaderP>
              </SectionHeader>
              <SectionMain> 
                  <SectionMainUl>
                    <SectionlistTop100 data={newTenGames} />
                  </SectionMainUl>
              </SectionMain>
              <SectionFooter>  
                <Link to={'/border'} className='Link'>
                  <FooterLink>전체 게시판으로 이동</FooterLink>
                </Link>
                <div className='anotherTenGames' 
                style={
                  {width : "100px", height : "30px",borderRadius : "40px" , border : "1px solid", 
                  position : "absolute", top : "-80%", left : "50%",transform : "translate(-50%,0)",
                  display: "flex", justifyContent : "center", alignItems : "center",
                  backgroundColor : "#9e814c", color : "white",
                  cursor : "pointer"}}
                onClick={getTenMore}>
                  {isLoading ? <img style={{width : "25px", height : "25px"}} src={loadingGIF2} /> : "show more"}
                </div>
              </SectionFooter>
          </SectionContainer>
      </div>
    )
}

export default SectionTop100;