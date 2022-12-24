import { Column } from '@ant-design/charts'
import React from 'react'

const DataChart = () => {
    const data = [
        {
          type: 'Jan',
          sales: 38,
        },
        {
          type: 'Feb',
          sales: 52,
        },
        {
          type: 'Mar',
          sales: 61,
        },
        {
          type: 'Apr',
          sales: 48,
        },
        {
          type: 'May',
          sales: 38,
        },
        {
          type: 'Jun',
          sales: 38,
        },
        {
          type: 'Aug',
          sales: 38,
        },
        {
            type: 'Sep',
            sales: 38,
          },
          {
            type: 'Oct',
            sales: 38,
          },
          {
            type: 'Nov',
            sales: 38,
          },
          {
            type: 'Dec',
            sales: 38,
          },
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
          return "#ffd333";
        },
        label: {
          position: 'middle',
          style: {
            fill: '#000',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'Month',
          },
          sales: {
            alias: 'seles',
          },
        },
      };
  return (
    <div>
        <Column {...config} />
    </div>
  )
}

export default DataChart



