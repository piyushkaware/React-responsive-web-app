import React from "react";
import styled from "styled-components";
import Background from "../img/background.png";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
  background: url(${Background});
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  margin-left: 75px;
  margin-top: 0;
  margin-bottom: 55px;
  @media only screen and (max-width: 480px) {
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-bottom: 5px;
  }
`;

const TextArea = styled.textarea`
  height: 60%;
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 10px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  letter-spacing: 2px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 62%;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const Icon = styled.img`
  width: 30px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>
              National Institute of Technology Campus, fathimanagar, Telangana
              506004
            </Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>Phone: +91-870-2459191 </Text>
            <Text>FAX : +91-870-2459547</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>piyushkaware3@gmail.com</Text>
            <Text>piyushkaware3@yahoo.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
