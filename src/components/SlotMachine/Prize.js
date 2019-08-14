import React, { Component } from 'react'
import styled from 'styled-components'
import { getPrizeValue } from '../../helpers'

import { connect } from 'react-redux';

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

const Prize = styled.h1`
  min-height: 22px;
`

class SlotMachine extends Component {'Value'
  constructor(props) {
    super(props)
    this.state = {
      arrPrize: this.props.slotMachine.slots,
      value: ''
    }
  }

  render() {
    return (
      <div>
        <MoneyHole />
        <Prize>{getPrizeValue(this.props.slotMachine.slots)}</Prize>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  slotMachine: state.slots
});

export default connect(mapStateToProps)(SlotMachine)
