import React from "react";
import BarMain from "../../components/BarGraph/BarMain";

export default {
  title: "BarChart",
  component: BarMain,
  argTypes: {
    title: { control: "text" },
    color: { control: "color" },
    chartArray: { control: "object" },
  },
};

export const BarColor = (args) => <BarMain {...args} />;
BarColor.args = {
  title: "My Chart",
  color: "lightblue",
  chartArray: [
    { year: "1951", sales: 38 },
    { year: "1952", sales: 52 },
    { year: "1956", sales: 61 },
    { year: "1957", sales: 45 },
    { year: "1958", sales: 48 },
    { year: "1959", sales: 38 },
    { year: "1960", sales: 38 },
    { year: "1962", sales: 38 },
  ],
};
