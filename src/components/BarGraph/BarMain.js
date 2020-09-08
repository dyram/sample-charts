import React, { useState, useEffect } from "react";
import { Chart, Interval, Tooltip } from "bizcharts";
import { Typography } from "antd";

const { Title } = Typography;

export default function BarMain(props) {
  // const [chartData, setChartData] = useState([
  //   { year: "1951", sales: 38 },
  //   { year: "1952", sales: 52 },
  //   { year: "1956", sales: 61 },
  //   { year: "1957", sales: 45 },
  //   { year: "1958", sales: 48 },
  //   { year: "1959", sales: 38 },
  //   { year: "1960", sales: 38 },
  //   { year: "1962", sales: 38 },
  // ]);

  const [chartData, setChartData] = useState([]);

  let { color, title, chartArray } = props;

  useEffect(() => {
    if (props && props.chartArray) setChartData([...chartArray]);
    else
      setChartData([
        { year: "1951", sales: 38 },
        { year: "1952", sales: 52 },
        { year: "1956", sales: 61 },
        { year: "1957", sales: 45 },
        { year: "1958", sales: 48 },
        { year: "1959", sales: 38 },
        { year: "1960", sales: 38 },
        { year: "1962", sales: 38 },
      ]);
  }, [props.chartArray]);

  return (
    <div>
      <Title>{title}</Title>
      <br />
      <Chart
        height={200}
        autoFit
        data={chartData}
        interactions={["active-region"]}
        padding="auto"
      >
        <Interval color={color} position="year*sales" />
        <Tooltip shared />
      </Chart>
    </div>
  );
}
