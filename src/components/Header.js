import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import SectionWrapper from './SectionWrapper'

const Header = styled.header`
  padding: 10px 0;

  h1 {
    margin-right: auto;

    a {
      text-decoration: none;
    }
  }
  @media screen and (min-width: 500px) {
    display: flex;
    align-items: center;
    
    h1 {
      margin-bottom: 0;
    }
  }
`

const Nav = styled.nav`
  a {
    margin-right: 10px;

    &:last-child {
      margin-left: 0;
    }
  }
`

export default props => (
  <SectionWrapper>
    <Header>
      <h1>
        <Link to='/'>React App</Link>
      </h1>

      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </Nav>
    </Header>
  </SectionWrapper>
)
