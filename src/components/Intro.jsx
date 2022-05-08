import React from "react";
import styled from "styled-components";
import Woman from "../img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Into = styled.div`
  width: 60%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 20px;
  background-color: darkblue;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 2px;
  border: none;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    align-items: center;
    margin-top: 20px;
  }
`;
const Phone = styled.span`
  color: #f0667d;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  /* width: 100%; */
  position: absolute;
  bottom: 20px;
  left: -65px;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in Creative age</Title>
        <Desc>
          We believe that designing product and services in close partnership
          with our clients is the only way to have a real impact on their
          business
        </Desc>
        <Into>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us 0712-22222</Phone>
            <ContactText>For any query or concern</ContactText>
          </Contact>
        </Into>
      </Left>
      <Right>
        <Image src={Woman}></Image>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
