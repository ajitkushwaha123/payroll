"use client";
// import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//     {name : "Mon" , present : 80, absent : 16 , leave : 4},
//     {name : "Tue" , present : 70, absent : 20 , leave : 10},
//     {name : "Wed" , present : 90, absent : 5 , leave : 5},
//     {name : "Thu" , present : 85, absent : 10 , leave : 5},
//     {name : "Fri" , present : 75, absent : 15 , leave : 10},
//     {name : "Sat" , present : 60, absent : 20 , leave : 20},
//     {name : "Sun" , present : 50, absent : 30 , leave : 20},
// ]

// // const datab = [
// //   {
// //     name: "Mon",
// //     uv: 4000,
// //     pv: 2400,
// //     amt: 2400,
// //   },
// //   {
// //     name: "Page B",
// //     uv: 3000,
// //     pv: 1398,
// //     amt: 2210,
// //   },
// //   {
// //     name: "Page C",
// //     uv: 2000,
// //     pv: 9800,
// //     amt: 2290,
// //   },
// //   {
// //     name: "Page D",
// //     uv: 2780,
// //     pv: 3908,
// //     amt: 2000,
// //   },
// //   {
// //     name: "Page E",
// //     uv: 1890,
// //     pv: 4800,
// //     amt: 2181,
// //   },
// //   {
// //     name: "Page F",
// //     uv: 2390,
// //     pv: 3800,
// //     amt: 2500,
// //   },
// //   {
// //     name: "Page G",
// //     uv: 3490,
// //     pv: 4300,
// //     amt: 2100,
// //   },
// // ];

// export default class AttendanceChart extends PureComponent {
//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={00}
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar name={"Prensent"} dataKey="present" stackId="a" fill="#7152F3" />
//           <Bar name={"Absent"} dataKey="absent" stackId="a" fill="#FEB85B" />
//           <Bar name={"Leave"} dataKey="leave" stackId="a" fill="#F45B69" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }


import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Mon", present: 80, absent: 16, leave: 4 },
  { name: "Tue", present: 70, absent: 20, leave: 10 },
  { name: "Wed", present: 90, absent: 5, leave: 5 },
  { name: "Thu", present: 85, absent: 10, leave: 5 },
  { name: "Fri", present: 75, absent: 15, leave: 10 },
  { name: "Sat", present: 60, absent: 20, leave: 20 },
  { name: "Sun", present: 50, absent: 30, leave: 20 },
];

const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/tooltip-with-customized-content-vgl956';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            name={"Present"}
            dataKey="present"
            barSize={20}
            stackId="a"
            fill="#8884d8"
          />
          <Bar
            name={"Absent"}
            dataKey="absent"
            barSize={20}
            stackId="a"
            fill="#FEB85B"
          />
          <Bar
            name={"Leave"}
            dataKey="leave"
            barSize={20}
            stackId="a"
            fill="#F45B69"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
