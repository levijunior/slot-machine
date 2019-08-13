import React from 'react'
import WheelsContainer from './WheelsContainer'
import Button from './Button'

import styled from 'styled-components'

const SlotMachineContainer = ({ className, children }) => (
  <section className={className}>
    {children}
  </section>
);
const StyledSlotMachineContainer = styled(SlotMachineContainer)`
  position: relative;
  width: calc(100vw - 50px);
  max-width: 1200px;
  margin: auto;  
  background: #e2dcdc;
  padding: 35px 0;
  text-align: center;
  border-radius: 20px;
  font-family: sans-serif;
`;

const MoneyHole = styled.div`
  display: block;
  width: 80%;
  height: 10px;
  background: #333;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 15px;
  border: 10px solid #e8e7e5;
`

const SlotMachine = () => (
  <StyledSlotMachineContainer>
    <WheelsContainer />
    <Button>Start</Button>
    <Button secondary>Stop</Button>
    <MoneyHole />
  </StyledSlotMachineContainer>
)
export default SlotMachine