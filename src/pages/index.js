import React from "react"
import styled from 'styled-components'
import './index.css'
import Intro from '../components/index/intro'
import About from "../components/index/about"

const StyledIndex = styled.div`

`

const IndexPage = () => (
  <StyledIndex>
    <Intro />
    <About />
  </StyledIndex>
)

export default IndexPage
