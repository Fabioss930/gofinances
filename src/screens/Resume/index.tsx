import React from "react";
import { Text } from "react-native";
import HistoryCard from "../../components/HistoryCard";
import { Container, Header, Title } from "./styles";

const Resume: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <HistoryCard title="Compras" amount="R$150,50" color="red" />
    </Container>
  );
};

export default Resume;
