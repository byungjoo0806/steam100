import React from 'react';
import { SectionContainer, SectionHeader, SectionMain, SectionFooter, SectionHeaderH2, SectionHeaderP, SectionMainUl, FooterLink } from './Section.styled';
import SectionlistTop100 from './SectionlistTop100';

const SectionTop100 = () => {

    return (
      <div style={{width : "100%", height : "100%", display : "flex", justifyContent : "space-evenly"}}>
          <SectionContainer>
              <SectionHeader>
                 <SectionHeaderH2>Steam Top 100</SectionHeaderH2>
                 <SectionHeaderP>Top 100 best Steam games of all time according to gamer reviews.</SectionHeaderP>
              </SectionHeader>
              <SectionMain>
                  <SectionMainUl>
                    <SectionlistTop100 />
                  </SectionMainUl>
              </SectionMain>
              <SectionFooter>
                  <FooterLink>전체 게시판으로 이동</FooterLink>
              </SectionFooter>
          </SectionContainer>
      </div>
    )
}

export default SectionTop100;