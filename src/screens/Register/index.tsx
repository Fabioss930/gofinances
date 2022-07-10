import React from "react";
import Button from "../../components/Forms/Button";
import Input from "../../components/Forms/Input";

import { Container, Form, Header, Title, Fields } from "./styles";

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;
