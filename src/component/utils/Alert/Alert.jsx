import React from "react";
import styled from "styled-components";

const AlertBlock = styled.div`
  position: absolute;
  color: #ffb800;
  z-index: 0;
  background: #fff;
  transition: all 0.2s linear;
  padding: 5px 9px;
  border-radius: 4px;
  font-size: 13px;
  height: 45px;
  width: 80%;
  text-align: center;
  margin: 0 auto;
`;
export const Alert = ({ text }) => {
  return (
    <AlertBlock>
      <p>{text}</p>
    </AlertBlock>
  );
};
