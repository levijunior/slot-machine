import React from 'react'
import Wheel from './Wheel'
import { RandomSlots } from '../../helpers'

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
  img {
    width: 100%;
    height: auto;
    max-width: 200px;
  }
`

const startArray = RandomSlots()

const WheelsContainer = (props) => (
  <Wrapper>
    { startArray.map( (item, index) => (
      <Wheel key={index}>
        <Image>
          <img src={item.image} alt=""/>
        </Image>
      </Wheel>
    ))}
    
  </Wrapper>
);

const mapStateToProps = state => ({
  slots: state.slots
});

export default connect(mapStateToProps)(WheelsContainer);
