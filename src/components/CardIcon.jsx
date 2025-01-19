import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

const CardIcon = () => {
  return (
    <div className='relative'>
      <TiShoppingCart className='text-2xl'/>
      <span className='bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-4 text-xs'>1</span>
      </div>
  )
}

export default CardIcon
