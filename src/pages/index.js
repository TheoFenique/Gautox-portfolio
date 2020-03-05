import React from "react"
import { Transition, Transition as ReactTransition } from "react-transition-group"
import { Link } from "gatsby"
import styled from 'styled-components'
import './index.css'
import Navbar from '../components/general/navbar'
import Intro from '../components/index/intro'
import SEO from "../components/general/seo"
import Wrapper from "../components/general/wrapper"

const StyledIndex = styled.div`

`

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" />
    <StyledIndex>
      <Intro />
    </StyledIndex>
  </Wrapper>
)

export default IndexPage
