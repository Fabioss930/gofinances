import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";

interface TypeProps extends TouchableOpacityProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

const TransactionTypeButton: React.FC<TypeProps> = ({
  type,
  title,
  isActive,
  ...rest
}) => {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};
export default TransactionTypeButton;
