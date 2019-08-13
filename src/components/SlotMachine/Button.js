import React from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.secondary ? "#cb0410" : "#01ab09"};
  
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bolder;
  margin: 30px 10px;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  padding: 30px 0;
  width: 40%;
  max-width: 400px;; 
  border-radius: 10px;
  box-shadow: 0px 10px 0px 0px rgba(0,0,0,.15);
  cursor: pointer;
`;

const Button = ({ secondary, children }) => (
  <StyledButton secondary={secondary}>{children}</StyledButton>
)

export default Button;