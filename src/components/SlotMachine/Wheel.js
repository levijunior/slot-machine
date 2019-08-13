import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  background: #fff;
  flex-grow: 1;
  margin: 10px;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  border: 5px solid #f1f1f1;
  padding: 15px;
`;

const Wheel = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Wheel
