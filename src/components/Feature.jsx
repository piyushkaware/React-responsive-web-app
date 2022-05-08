import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  color: #333;
  font-style: italic;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 20px;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App}></Image>
      </Left>
      <Right>
        <Title>
          <b>Good</b> design
          <br />
          <b>Good</b> business
        </Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Desc>
          We help our client succeed by creating brand identities, digital
          experiences, and print materials that communicated clearly, achieve
          marketing goals, and look fantastic.{" "}
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
