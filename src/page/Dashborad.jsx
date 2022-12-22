import React from 'react'
import {BsArrowDownRight} from "react-icons/bs"
import { Column } from '@ant-design/plots';

const Dashborad = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
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
        fill: '#FFFFFF',
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
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return (
    <div>
      <div>
        <h2 className='text-[25px] font-semibold py-2'>Dashboad</h2>
        <div className='flex items-center justify-between gap-5'>
          <div className=' bg-white p-3 rounded-md shadow-md w-full'>
            <span className=' text-base'>Total</span>
            <div className='flex justify-end'>
              <span className='flex items-center'><BsArrowDownRight /> 32%</span>
            </div>
            <div className='flex items-center justify-between'>
              <h3 className='text-[20px] font-semibold'>$1100</h3>
              <p>Compared To April 2022</p>
            </div>
          </div>
          <div className=' bg-white p-3 rounded-md shadow-md w-full'>
            <span className=' text-base'>Total</span>
            <div className='flex justify-end'>
              <span className='flex items-center'><BsArrowDownRight /> 32%</span>
            </div>
            <div className='flex items-center justify-between'>
              <h3 className='text-[20px] font-semibold'>$1100</h3>
              <p>Compared To April 2022</p>
            </div>
          </div>

          <div className=' bg-white p-3 rounded-md shadow-md w-full'>
            <span className=' text-base'>Total</span>
            <div className='flex justify-end'>
              <span className='flex items-center'><BsArrowDownRight /> 32%</span>
            </div>
            <div className='flex items-center justify-between'>
              <h3 className='text-[20px] font-semibold'>$1100</h3>
              <p>Compared To April 2022</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Incom States</h2>
          <div>
          <Column {...config} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashborad