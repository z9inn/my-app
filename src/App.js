import React from 'react';
import styled from 'styled-components';
import Content from './Content';

class App extends React.Component {
  state = {
    query: ""
  };

  render() {
    return (
    <Container query={this.state.query}>
      <Input placeholder="테마를 입력하시오"
      onKeyPress={this.handleInputKeyPress}
      />
      <Content />
    </Container>
    );
  }

  handleInputKeyPress = event => {
    if(event.key === "Enter") {
      this.setState({
        query: event.target.value
      });
      event.target.value = "";
    }
  };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(20, 20, 20,0.1) 10%,
    rgba(20, 20, 20,0.7) 70%,
    rgba(20, 20, 20, 1)

  ),
  url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
  `;

  /* to right: 오른쪽에 효과를 주겠다는것 같다 */

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;  //배경색이랑 같아짐 (반투명)
  outline: none;
  border: none;
  font-size: 12px;
  color: white;
`;

export default App;
