import React from 'react'
import { useNavigate } from 'react-router-dom'
const HeaderUpaymentStore = () => {
  const navigate=useNavigate();
  return (
    <div className="w-full pt-px">
      <div className="flex flex-row justify-between bg-white drop-shadow rounded-md m-5 ">
        <div className="ml-5 p-1 text-xl capitalize font-bold cursor-pointer " onClick={()=>navigate('/')}>UPayments Store</div>
        <div className="mr-5 p-1 text-xl capitalize font-bold cursor-pointer ">Register</div>
      </div>
    </div>
  )
}

export default HeaderUpaymentStore