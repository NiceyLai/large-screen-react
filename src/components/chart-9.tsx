import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart9 = () => {
  const divRef = useRef(null);
    const myChart = useRef(null);
  const data = [
    { name: '0', 2011: 0.15 },
    { name: '18', 2011:0.20  },
    { name: '28', 2011:  0.26},
    { name: '38', 2011:   0.35},
    { name: '48', 2011:  0.28},
    { name: '58', 2011: 0.21},
    { name: '68', 2011: 0.08},
    { name: '78', 2011: 0.06},
  ];
  
   useEffect(() => {
    setInterval(() => {
      const newData = [
    { name: '0', 2011:  Math.random() },
    { name: '18', 2011: Math.random()  },
    { name: '28', 2011:   Math.random()},
    { name: '38', 2011:   Math.random()},
    { name: '48', 2011:   Math.random()},
    { name: '58', 2011:  Math.random()},
    { name: '68', 2011:  Math.random()},
    { name: '78', 2011:  Math.random()},
      ];
      x(newData);
    }, 2000);
    }, []);
  
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      color: '#F7A110',
      xAxis: {
        type: 'category',
        boundaryGap: false,
                data: data.map(i => i.name),
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
      series: [{
        type: 'line',
              data: data.map(i => i[2011]),
        symbol: 'circle',
        symbolSize: px(8),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
          }]),
        }
      }]
    }));
   }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart">
      </div>
    </div>
  );
};