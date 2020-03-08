import React from "react"
import { Transition, Transition as ReactTransition } from "react-transition-group"
import { Link } from "gatsby"
import styled from 'styled-components'
import './index.css'
import Navbar from '../components/general/navbar'
import Intro from '../components/index/intro'
import Wrapper from "../components/general/Wrapper"

const StyledIndex = styled.div`

`

const IndexPage = () => (
  <StyledIndex>
    <Intro />
  </StyledIndex>
)

export default IndexPage
