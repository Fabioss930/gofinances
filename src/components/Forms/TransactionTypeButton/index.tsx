import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title, Icon, Button } from "./styles";

interface TypeProps extends RectButtonProps {
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
    <Container type={type} isActive={isActive}>
      <Button {...rest} type={type} isActive={isActive}>
        <Icon name={icon[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
};
export default TransactionTypeButton;
