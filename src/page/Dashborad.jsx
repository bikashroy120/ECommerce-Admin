import React from 'react'
import {BsArrowDownRight} from "react-icons/bs"
import DataChart from '../components/dasebord/DataChart'
import TableData from '../components/dasebord/TableData'


const Dashborad = () => {

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

        <div className='py-5'>
          <h2 className='text-[25px] font-semibold'>Incom States</h2>
          <div>
            <DataChart />
          </div>
        </div>

        <div className='py-5'>
          <h2 className='text-[25px] font-semibold'>Recent Order</h2>
          <div>
              <TableData />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashborad