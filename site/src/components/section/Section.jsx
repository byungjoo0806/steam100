import React from 'react';
import { SectionContainer, SectionHeader, SectionMain, SectionFooter, SectionHeaderH2, SectionHeaderP, SectionMainUl, SectionMainLi
        , SectionMainSpan, SectionMainImg, SectionMainText, FooterLink } from './Section.styled';

import { testImg1 } from '../../img';
import { Link } from 'react-router-dom';
import Sectionlist from './Sectionlist';

import axios from "axios";

const Section = () => {

    return (
      <div style={{width : "100%", height : "100%", display : "flex", justifyContent : "space-evenly"}}>
          <SectionContainer>
              <SectionHeader>
                 <SectionHeaderH2>Steam Top 100</SectionHeaderH2>
                 <SectionHeaderP>Top 100 best Steam games of all time according to gamer reviews.</SectionHeaderP>
              </SectionHeader>
              <SectionMain>
                  <SectionMainUl>
                    <Sectionlist />
                  </SectionMainUl>
              </SectionMain>
              <SectionFooter>
                  <FooterLink>Top 100으로 이동</FooterLink>
              </SectionFooter>
          </SectionContainer>
      </div>
    )
}

export default Section;