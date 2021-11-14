import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import Todo from './Todo';

const Content = () => (
    <Container>
        <Clock />
        <Todo />
    </Container>
);

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 33px;
  width: 500px;
  height: calc(100% - 33px);
  color: white;
  overflow-y: auto;
  @media (max-width:768px){
      width: 100%;
  }
`;

export default Content;