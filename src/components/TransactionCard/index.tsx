import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

interface Props {
  type: "up" | "down";
  title: string;
  amount: string;
  categoryName: string;
  date: string;
}

const TransactionsCard: React.FC<Props> = ({
  type,
  title,
  amount,
  categoryName,
  date,
}) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Amount type={type}>{amount}</Amount>
        <Footer>
          <Category>
            <Icon name="dollar-sign" />
            <CategoryName>{categoryName}</CategoryName>
          </Category>
          <Date>{date}</Date>
        </Footer>
      </Container>
    </>
  );
};

export default TransactionsCard;
