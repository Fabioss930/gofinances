import React from "react";
import { Container, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface TypeProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<TypeProps> = ({ title, onPress, ...rest }) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
