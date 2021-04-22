import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../assets/style/colors'

const StyledNextProject = styled.div`
box-sizing: border-box;
display: flex;
justify-content: flex-end;
background: ${props=>props.colors.contentDarker};

a {
    text-decoration: none;
    margin: 56px 5% 56px 0px;
    padding: 1% 0;
    p {
        color: white;
        font-size: 32px;
        margin: 0;
        line-height: 1;
        transition: all 0.3s;
        font-family: 'nueue-bold'
    } 
}
`

const NextProject = ({ link }) => {
    return (
        <StyledNextProject colors={colors} data-scroll-section>
            <Link to={link} data-scroll>
                <p>Got to next project</p>
            </Link>
        </StyledNextProject>
    )
}

export default NextProject