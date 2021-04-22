import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../assets/style/colors'
import Work from './work'
import {worksList} from "./worksList"

const StyledWorks = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;

`


const Works = () => {
    return (
        <StyledWorks data-scroll-section colors={colors} >
            {worksList.map((v, i, a) => 
                <Work data-scroll key={i} work={v}/>
            )}
        </StyledWorks>
    )
}

export default Works