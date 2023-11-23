import styled from "styled-components";
import teste from "@assets/images/background.png";

export const Container = styled.div`
  background-image: url(${teste.src});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  width: 464px;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  gap: var(--28, 28px);

  border-radius: var(--24, 24px);
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(25px);
`;

export const Button = styled.input`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-radius: 12px;
  background-color: #1c1c1c;

  cursor: pointer;

  font-size: 18px;

  &:hover {
    background-color: #494949;
  }
`;
