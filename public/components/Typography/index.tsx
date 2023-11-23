// Componentes.tsx
import React from "react";
import styled from "styled-components";

interface TypographyProps {
  children?: React.ReactNode;
  color?: string;
  size?: string;
  weight?: string;
}

const StyledTypography = styled.span<TypographyProps>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color || "inherit"};
`;

const Typography: React.FC<TypographyProps> = ({ children, ...props }) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};

export default Typography;
