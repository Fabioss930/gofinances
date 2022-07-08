import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

interface TypeProps {
  type: "up" | "down";
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 4px;
  padding: 18px 24px;
  margin-top: 14px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.sucess : theme.colors.attention};
`;
export const Footer = styled.View`
  flex-direction: row;
  padding: 12px 0 0;
  justify-content: space-between;
`;
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;
export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 6px;
`;
export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
