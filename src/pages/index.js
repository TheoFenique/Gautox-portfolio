import React from "react"
import styled from 'styled-components'
import './index.css'
import Intro from '../components/index/intro'
import About from "../components/index/about"
import Works from "../components/index/works"

const StyledIndex = styled.div`
max-width: 90%;
margin: auto;
`

const IndexPage = () => (
  <StyledIndex>
    <Intro/>
    {/* <About /> */}
    <Works/>
  </StyledIndex>
)

export default IndexPage
