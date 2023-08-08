import React from 'react'
import { SectionContainer, SectionHeader, SectionMain, SectionFooter, SectionHeaderH2, SectionHeaderP, SectionMainUl, SectionMainLi
        , SectionMainSpan, SectionMainImg, SectionMainText, FooterLink } from './Section.styled'

import { testImg1 } from '../../img'

const Section = () => {
  return (
    <div>
        <SectionContainer>
            <SectionHeader>
               <SectionHeaderH2>Steam Top 100</SectionHeaderH2>
               <SectionHeaderP>Top 100 best Steam games of all time according to gamer reviews.</SectionHeaderP>
            </SectionHeader>
            <SectionMain>
                <SectionMainUl>
                    <SectionMainLi>1
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>2
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>3
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>4
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>5
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>6
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>7
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>8
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>9
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>
                    <SectionMainLi>10
                        <SectionMainSpan>
                            <SectionMainImg src={testImg1} alt="testImg" />
                            <SectionMainText>자전거 게임</SectionMainText>
                        </SectionMainSpan>
                    </SectionMainLi>

                </SectionMainUl>
            </SectionMain>
            <SectionFooter>
                <FooterLink>Top 100으로 이동</FooterLink>
            </SectionFooter>
        </SectionContainer>
    </div>
  )
}

export default Section