import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
   const myChart = useRef(null);
  const data =
    [{ name: '0', 2011: 0.15 },
    { name: '2', 2011:0.13  },
    { name: '4', 2011:  0.12},
    { name: '6', 2011:   0.13},
    { name: '8', 2011:  0.14},
    { name: '10', 2011:  0.16},
    { name: '12', 2011:   0.18},
    { name: '14', 2011:   0.25},
    { name: '16', 2011:   0.27},
    { name: '18', 2011:  0.28},
    { name: '20', 2011:   0.26},
    { name: '22', 2011:   0.20},
    { name: '24', 2011:  0.14},
    ];
  
   useEffect(() => {
    setInterval(() => {
      const newData = [
{ name: '0', 2011:  Math.random() },
    { name: '2', 2011:  Math.random()  },
    { name: '4', 2011:  Math.random()  },
    { name: '6', 2011:  Math.random()  },
    { name: '8', 2011:  Math.random()  },
    { name: '10', 2011:  Math.random()  },
    { name: '12', 2011:  Math.random()  },
    { name: '14', 2011:  Math.random()  },
    { name: '16', 2011:  Math.random()  },
    { name: '18', 2011:  Math.random()  },
    { name: '20', 2011:  Math.random()  },
    { name: '22', 2011:  Math.random()  },
    { name: '24', 2011:  Math.random()  },
      ];
      x(newData);
    }, 2000);
    }, []);
  
  const x = (data) => { 
   myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
          data: data.map(i => i.name),
          splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: { show: false },
      },
      
      yAxis: {
        splitLine: {lineStyle: {color: '#073E78'}},
        type: 'value',
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        { 
          type: 'line',
          data: data.map(i => i[2011]),
     
          symbol: 'circle',
        symbolSize: px(8),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
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
    <div className="bordered 发案趋势">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};