import React from 'react'

const CoustomInput = ({type,ple,setValue,value}) => {
  return (
    <div className='my-4'>
        <input className='w-[100%] shadow-md text-[18px] font-semibold py-3 px-3 outline-none border-none rounded-md' type={type} placeholder={ple} onChange={(e)=>setValue(e.target.value)} value={value}/>
    </div>
  )
}

export default CoustomInput;