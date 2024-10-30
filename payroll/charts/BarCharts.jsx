"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    dineIn: 2800,
    takeAway: 4000,
    delivery: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    dineIn: 2800,
    takeAway: 3000,
    delivery: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    dineIn: 2800,
    takeAway: 2000,
    delivery: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    dineIn: 2800,
    takeAway: 2780,
    delivery: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    dineIn: 2800,
    takeAway: 1890,
    delivery: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    dineIn: 2800,
    takeAway: 2390,
    delivery: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    dineIn: 2800,
    takeAway: 3490,
    delivery: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    dineIn: 2800,
    takeAway: 3490,
    delivery: 4300,
    amt: 2100,
  },
];

export default class BarCharts extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Delivery" dataKey="delivery" stackId="a" fill="#626F86" />
          <Bar name="Take Away" dataKey="takeAway" stackId="a" fill="#FEC195" />
          <Bar name="Dine In" dataKey="dineIn" stackId="a" fill="#388BFF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
