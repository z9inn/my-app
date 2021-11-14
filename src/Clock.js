import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
    state = {
        date: new Date()

    }

  render() {
      const { date } = this.state;
    return (
      <Container>
        <CurDate>
            {date.getFullYear()}&nbsp;/&nbsp;
            {date.getMonth() + 1}&nbsp;/&nbsp;
            {date.getDate()}
        </CurDate>
        <CurDay>
            {date.getDay() === 0 ? "Sunday"
            : date.getDay() === 1 ? "Monday"
            : date.getDay() === 2 ? "화요일"
            : date.getDay() === 3 ? "Wednesday"
            : date.getDay() === 4 ? "Thursday"
            : date.getDay() === 5 ? "Friday"
            : "Satuday"}
        </CurDay>
        <CurTime>
            {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()} &nbsp;:&nbsp;
            {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} &nbsp;:&nbsp;
            {date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}
        </CurTime>
      </Container>
    );
  }

  getDate = () => {
      this.setState({
          date: new Date()
      });
  };

  componentDidMount() {
      this.oneMinuteCall = setInterval(() => this.getDate(), 1000);
  }

  componentWillUnmount() {
      clearInterval(this.oneMinuteCall);
  }
}

const Container = styled.div`
  margin-top: 30px;
  font-size: 30px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 24px;
`;

const CurDay = styled.div`
  font-style: italic;
`;

const CurTime = styled.div`
  font-size: 45px;
  font-weight: 500;
`;
export default Clock;