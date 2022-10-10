import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "城关区", 2011: 90 },
    { name: "七里河区", 2011: 30 },
    { name: "西固区", 2011: 56 },
    { name: "安宁区", 2011: 88 },
    { name: "红古区", 2011: 83 },
    { name: "永登县", 2011: 43 },
    { name: "皋兰县", 2011: 29 },
    { name: "榆中县", 2011: 52 },
    { name: "新区", 2011: 38 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "城关区", 2011: Math.random() * 100 },
        { name: "七里河区", 2011: Math.random() * 100 },
        { name: "西固区", 2011: Math.random() * 100 },
        { name: "安宁区", 2011: Math.random() * 100 },
        { name: "红古区", 2011: Math.random() * 100 },
        { name: "永登县", 2011: Math.random() * 100 },
        { name: "皋兰县", 2011: Math.random() * 100 },
        { name: "榆中县", 2011: Math.random() * 100 },
        { name: "新区", 2011: Math.random() * 100 },
      ];
      x(newData);
    }, 1000);
  }, []);

  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          data: data.map((i) => i.name),
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            formatter(val) {
              if (val.length > 2) {
                const array = val.split("");
                array.splice(2, 0, "\n");
                return array.join("");
              } else {
                return val;
              }
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
        },
        series: [
          {
            type: "bar",
            barWidth: px(16), //柱图宽度
            data: data.map((i) => i[2011]),
          },
        ],
      })
    );
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
