import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 30s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff97af;

  position: absolute;
  top: 150px;
  left: -60px;
  z-index: -2;
  animation: circle 30s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(200vw, -100vh);
    }
  }
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 55px solid transparent;
  border-right: 55px solid transparent;

  border-bottom: 55px solid #669966;

  position: absolute;
  top: 300px;
  left: -60px;
  z-index: -3;
  animation: triangle 60s linear alternate infinite;

  @keyframes triangle {
    to {
      transform: translate(200vw, -200vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Triangle />
    </>
  );
};

export default AnimatedShapes;
