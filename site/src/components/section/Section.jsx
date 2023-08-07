import React from 'react'
import { SectionContainer, SectionHeader, SectionMain, SectionFooter } from './Section.styled'

const Section = () => {
  return (
    <div>
        <SectionContainer>
            <SectionHeader>
                Steam Top 100
            </SectionHeader>
            <SectionMain>
                1
                2
                3
                4
            </SectionMain>
            <SectionFooter>
                더 보기
            </SectionFooter>
        </SectionContainer>
    </div>
  )
}

export default Section