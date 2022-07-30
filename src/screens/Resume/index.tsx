import React, { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HistoryCard from "../../components/HistoryCard";
import { useFocusEffect } from "@react-navigation/native";
import { addMonths, subMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  ChartContainer,
  Container,
  Content,
  Header,
  Title,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
  LoadContainer,
} from "./styles";
import { categories } from "../../utils/categories";
import { VictoryPie, VictoryChart } from "victory-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ActivityIndicator, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

interface TransactionData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  porcent: string;
}

const Resume: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());
  const [totalByCategories, setTotaByCategories] = useState<CategoryData[]>([]);

  const theme = useTheme();
  function handleDateChange(action: "next" | "prev") {
    if (action === "next") {
      setSelectDate(addMonths(selectDate, 1));
    } else {
      setSelectDate(subMonths(selectDate, 1));
    }
  }

  async function loadData() {
    setIsLoading(true);
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) =>
        expensive.type === "negative" &&
        new Date(expensive.date).getMonth() === selectDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectDate.getFullYear()
    );

    const expensivesTotal = expensives.reduce(
      (acumullator: number, expensive: TransactionData) => {
        return acumullator + Number(expensive.amount);
      },
      0
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        const porcent = `${((categorySum / expensivesTotal) * 100).toFixed(
          0
        )}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          porcent,
        });
      }
    });
    setTotaByCategories(totalByCategory);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectDate])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: useBottomTabBarHeight() }}
        >
          <Content>
            <MonthSelect>
              <MonthSelectButton onPress={() => handleDateChange("prev")}>
                <MonthSelectIcon name="chevron-left" />
              </MonthSelectButton>
              <Month>
                {format(selectDate, "MMMM, yyyy", { locale: ptBR })}
              </Month>
              <MonthSelectButton onPress={() => handleDateChange("next")}>
                <MonthSelectIcon name="chevron-right" />
              </MonthSelectButton>
            </MonthSelect>
            <ChartContainer>
              <VictoryPie
                data={totalByCategories}
                x="porcent"
                y="total"
                colorScale={totalByCategories.map((category) => category.color)}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: "bold",
                    fill: theme.colors.shape,
                  },
                }}
                labelRadius={50}
              />
            </ChartContainer>
            {totalByCategories.map((item) => (
              <HistoryCard
                key={item.key}
                title={item.name}
                amount={item.totalFormatted}
                color={item.color}
              />
            ))}
          </Content>
        </ScrollView>
      )}
    </Container>
  );
};

export default Resume;
