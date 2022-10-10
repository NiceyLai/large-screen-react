import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart10 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data =
    
    [{ name: '入室抢劫', 2011: 40 },
    { name: '当街偷盗', 2011: 22 },
    { name: '团伙诈骗', 2011: 20 },
    { name: '刑事案件', 2011: 18 },
    { name: '民事案件', 2011: 32 },
    ];   
    useEffect(() => {
    setInterval(() => {
      const newData = [
   { name: '入室抢劫', 2011: Math.random() * 100 },
    { name: '当街偷盗', 2011: Math.random() * 100 },
    { name: '团伙诈骗', 2011: Math.random() * 100 },
    { name: '刑事案件', 2011: Math.random() * 100 },
    { name: '民事案件', 2011: Math.random() * 100 },
      ];
      x(newData);
    }, 2000);
    }, []);
  
  const x = (data) => { 
   myChart.current.setOption(createEchartsOptions({
      xAxis: {
                      data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        }
      },
      series: [{
        type: 'bar',
          data: data.map(i => i[2011]),
    
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A67FF'
        }, {
          offset: 1,
          color: '#B92AE8'
        }]),
      }]
    }));

  }
  useEffect(() => {
     myChart.current  = echarts.init(divRef.current);
 
  }, []);

  return (
    <div ref={divRef} className="chart">
    </div>
  );
};