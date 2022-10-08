import React, { useEffect, useRef } from 'react';
import * as echarts from "echarts";
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart1 = () => {
      const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
   myChart.setOption(createEchartsOptions({
      xAxis: {
        data: [
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
        ],
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
        min: 0,
        max: 40,
        interval: 5,
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
     
      },
      series: [
        {
          type: "bar",
          barWidth: px(16), //柱图宽度
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        },
      ],
    }));
  }, []);
    return (
    <div className="borderd 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
          </div>
)}