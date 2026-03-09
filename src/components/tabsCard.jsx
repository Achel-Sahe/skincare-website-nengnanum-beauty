import React from 'react'
import productImg from '../assets/product.png' ;

const TabsCard = ({product}) => {
  return (
      <div className='card-wrapper'>
          <img src={productImg} alt="" />
          <button>{ product }</button>
          <button>BUY</button>
    </div>
  )
}

export default TabsCard