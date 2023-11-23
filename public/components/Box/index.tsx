import React, { ReactNode } from "react";
import styled from "styled-components";

interface BoxProps {
  children?: ReactNode;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  color?: string;
}

const StyledBox = styled.div<BoxProps>`
  display: ${(props) => props.display || "block"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  gap: ${(props) => props.gap || "0"};
  color: ${(props) => props.color};
`;

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
