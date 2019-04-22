import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: ${props => props.size};
  flex-grow: 1;
  margin-bottom: 4rem;
`

const Container = props => {
  return <Wrapper size={props.size}>{props.children}</Wrapper>
}

export default Container
