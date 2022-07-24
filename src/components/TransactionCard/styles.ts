import styled from "styled-components/native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "positive" | "negative";
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 2px;
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.sucess : theme.colors.attention};
`;
export const Footer = styled.View`
  flex-direction: row;
  margin-top: 19px;
  justify-content: space-between;
  align-items: center;
`;
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;
export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 17px;
`;
export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
