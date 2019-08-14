import React from 'react'
import WheelsContainer from './WheelsContainer'
import Button from './Button'
import Prize from './Prize'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SlotMachineActions } from '../../store/ducks/slots';

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

const SlotMachine = props => (
  <StyledSlotMachineContainer>
    <WheelsContainer />
    <Button handleClick={ () => props.spinSlot(true) }>Start</Button>
    <Button handleClick={ () => props.spinSlot(false) } secondary>Stop</Button>
    <Prize />
  </StyledSlotMachineContainer>
)


const mapStateToProps = state => ({
  slotMacslothine: state.slots
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SlotMachineActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SlotMachine)