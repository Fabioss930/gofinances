import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface TypeProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<TypeProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
