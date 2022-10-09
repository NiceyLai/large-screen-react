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
          "城关区",
          "七里河区",
          "西周区",
          "安宁区",
          "红谷区",
          "永登区",
          "滨海区",
          "榆中区",
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
          data: [40, 30, 26, 17, 23, 13, 19, 32, 38],
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