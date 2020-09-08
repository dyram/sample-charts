import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

export default function NivoBar() {
  const [data, setData] = useState([
    {
      country: "AD",
      "hot dog": 23,
      "hot dogColor": "hsl(267, 70%, 50%)",
      burger: 16,
      burgerColor: "hsl(306, 70%, 50%)",
      sandwich: 162,
      sandwichColor: "hsl(237, 70%, 50%)",
      kebab: 131,
      kebabColor: "hsl(65, 70%, 50%)",
      fries: 60,
      friesColor: "hsl(196, 70%, 50%)",
      donut: 134,
      donutColor: "hsl(353, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 67,
      "hot dogColor": "hsl(275, 70%, 50%)",
      burger: 112,
      burgerColor: "hsl(327, 70%, 50%)",
      sandwich: 186,
      sandwichColor: "hsl(299, 70%, 50%)",
      kebab: 80,
      kebabColor: "hsl(249, 70%, 50%)",
      fries: 70,
      friesColor: "hsl(240, 70%, 50%)",
      donut: 94,
      donutColor: "hsl(288, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 188,
      "hot dogColor": "hsl(349, 70%, 50%)",
      burger: 140,
      burgerColor: "hsl(332, 70%, 50%)",
      sandwich: 131,
      sandwichColor: "hsl(68, 70%, 50%)",
      kebab: 50,
      kebabColor: "hsl(51, 70%, 50%)",
      fries: 164,
      friesColor: "hsl(136, 70%, 50%)",
      donut: 97,
      donutColor: "hsl(190, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 134,
      "hot dogColor": "hsl(131, 70%, 50%)",
      burger: 186,
      burgerColor: "hsl(339, 70%, 50%)",
      sandwich: 107,
      sandwichColor: "hsl(175, 70%, 50%)",
      kebab: 165,
      kebabColor: "hsl(93, 70%, 50%)",
      fries: 47,
      friesColor: "hsl(18, 70%, 50%)",
      donut: 121,
      donutColor: "hsl(107, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 9,
      "hot dogColor": "hsl(138, 70%, 50%)",
      burger: 140,
      burgerColor: "hsl(355, 70%, 50%)",
      sandwich: 187,
      sandwichColor: "hsl(145, 70%, 50%)",
      kebab: 43,
      kebabColor: "hsl(113, 70%, 50%)",
      fries: 54,
      friesColor: "hsl(85, 70%, 50%)",
      donut: 129,
      donutColor: "hsl(17, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 103,
      "hot dogColor": "hsl(117, 70%, 50%)",
      burger: 178,
      burgerColor: "hsl(160, 70%, 50%)",
      sandwich: 129,
      sandwichColor: "hsl(37, 70%, 50%)",
      kebab: 136,
      kebabColor: "hsl(66, 70%, 50%)",
      fries: 67,
      friesColor: "hsl(104, 70%, 50%)",
      donut: 129,
      donutColor: "hsl(291, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 79,
      "hot dogColor": "hsl(96, 70%, 50%)",
      burger: 127,
      burgerColor: "hsl(119, 70%, 50%)",
      sandwich: 99,
      sandwichColor: "hsl(78, 70%, 50%)",
      kebab: 73,
      kebabColor: "hsl(20, 70%, 50%)",
      fries: 68,
      friesColor: "hsl(278, 70%, 50%)",
      donut: 157,
      donutColor: "hsl(274, 70%, 50%)",
    },
  ]);

  return (
    <div style={{ height: "60vh" }}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}
