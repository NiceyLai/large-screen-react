import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(26),
        itemHeight: px(12)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        {
          name: '抢劫',
          type: 'line',
          data: [0.10, 0.12, 0.15, 0.18,0.16,0.21,0.26,0.27,0.33]
        },
        {
          name: '醉驾',
          type: 'line',
          data: [0.10,0.13,0.15,0.19,0.23,0.25,0.27,0.29,0.40]
        },
        {
          name: '盗窃',
          type: 'line',
          data: [0.10,0.13,0.13,0.15,0.18,0.12,0.14,0.11,0.18]
        },
        {
          name: '故意杀人',
          type: 'line',
          data: [0.03,0.08,0.15,0.14,0.16,0.17,0.15,0.12,0.13]
        },
           {
          name: '暴力',
          type: 'line',
          data: [0.06, 0.16, 0.17, 0.12,0.15,0.14,0.22,0.21,0.28]
        },
                {
          name: '家庭纠纷',
          type: 'line',
          data: [0.06,0.09,0.12,0.15,0.20,0.24,0.28,0.34,0.39]
        },
        {
          name: '故意伤人',
          type: 'line',
          data: [0.10,0.11,0.13,0.14,0.14,0.21,0.23,0.13,0.16]
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(8),
        lineStyle: {width: px(1)}
      }))
    }));
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};