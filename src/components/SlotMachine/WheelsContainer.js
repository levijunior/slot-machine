import React, { Component } from 'react'
import Wheel from './Wheel'
import { Symbols, RandomSlots } from '../../helpers'

import { connect } from "react-redux"

import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 10px;
  padding: 10px 0;
  background: #e8e7e5;
  display: flex;
  border-radius: 10px;
`;

const Image = styled.div`
  overflow: hidden;
  height: 0;
  padding-top: 100%;

  div {
    margin-top: ${ props => `-${props.slot + 1}00%` }
    font-size: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`

class WheelsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slots: RandomSlots(),
    }
  }
  
  updateSlots = () => {
    let slotWheels = setInterval(() => {
      if(this.props.slotMachine.spin) {
        this.setState({ slots: RandomSlots() })
      } else {
        clearInterval(slotWheels);
      }
    }, 500)
    return this.state.slots
  }
  
  
  render() {
    return (
      <Wrapper>
        { this.updateSlots().map( (item, index) => (
          <Wheel key={index}>
            <Image slot={item} >
              <div>
                {Symbols.map((symbol) => (
                  <img key={symbol.name} 
                    src={symbol.image} alt="" 
                  />
                ))}
              </div>
            </Image>
          </Wheel>
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  slotMachine: state.slots
});

export default connect(mapStateToProps)(WheelsContainer);
