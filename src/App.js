import React from 'react'
import SlotMachine from './components/SlotMachine'
import { Provider } from "react-redux";
import store from "./store";

import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6ddbdc;
  min-height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <SlotMachine />
      </Container>
    </Provider>
  );
}

export default App