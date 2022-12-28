import React, { useState } from 'react'
import CoustomInput from '../components/Common/CoustomInput'

const AddBrand = () => {
    const [brand,setBrand] = useState()

  return (
    <div>
    <h2 className="text-[24px] font-semibold mb-5">Add Brand</h2>
    <div>
      <form action="">
        <div className="my-5 bg-white">
        </div>

        <CoustomInput
          type={"text"}
          ple={"Enter Brand..."}
          value={brand}
          setValue={setBrand}
        />

        <div className="mt-5">
          <button
            className="py-2 px-4 text-[18px] font-bold bg-yellow-500 rounded-md hover:bg-yellow-600 duration-300 transition-all  text-white"
            type="submit"
          >
            Add Brand
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddBrand