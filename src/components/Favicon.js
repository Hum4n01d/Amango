import React from 'react'
import styled from 'styled-components'

const Favicon = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 16px;
    margin-right: 5px;
  }
`

export default props => {
  const url = `http://www.google.com/s2/favicons?domain=${props.url}`
  
  return (
    <Favicon>
      <img src={url} alt="Favicon"/>
    </Favicon>
  )
}