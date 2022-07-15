import React, { useState } from "react";
import Button from "../../components/Forms/Button";
import Input from "../../components/Forms/Input";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import CategorySelect from "../../components/Forms/CategorySelect";

import {
  Container,
  Form,
  Header,
  Title,
  Fields,
  TransactionsType,
} from "./styles";

const Register: React.FC = () => {
  const [transectionType, setTransectionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransectionType(type);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsType>
            <TransactionTypeButton
              type="up"
              title="Entrada"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={transectionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Entrada"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transectionType === "down"}
            />
          </TransactionsType>
          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;
