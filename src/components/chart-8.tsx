import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null);
   const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
     const myChart = useRef(null);
  const data = [
            {value: 0.07, name: '10-20'},
            {value: 0.10, name: '20-30'},
            {value: 0.23, name: '30-40'},
            {value: 0.28, name: '40-50'},
            {value: 0.32, name: '50-60'},
          ];
  
   useEffect(() => {
     setInterval(() => {
      const newData = [
        {value:Math.random(), name: '10-20'},
            {value: Math.random(), name: '20-30'},
            {value: Math.random(), name: '30-40'},
            {value: Math.random(), name: '40-50'},
            {value: Math.random(), name: '50-60'},
      ];
      x(newData);
    }, 1000);
   }, []);
  
  const x = (data) => { 
       myChart.current.setOption(createEchartsOptions({
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          name: '访问来源',
          type: 'pie',
        radius: ['75%', '100%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
            formatter(options) {
              return (options.value * 100).toFixed(0);
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
   
            data: data.map(({ value, name}) => ({ value, name })),

        }
      ]
    })); 
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />10-20
        <span style={{background: colors[1]}} />20-30
        <span style={{background: colors[2]}} />30-40
        <span style={{background: colors[3]}} />40-50
        <span style={{background: colors[4]}} />50-60
      </div>
    </div>
  );
};