import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
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
        <StyledWorks colors={colors} data-scroll-section>
            {worksList.map((v, i, a) => 
                <Work key={i} title={v.title} content={v.content}/>
            )}
        </StyledWorks>
    )
}

export default Works