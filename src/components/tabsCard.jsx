import React from 'react'

const TabsCard = ({product}) => {
  return (
      <div className='card-wrapper'>
          <img src="/src/assets/product.png" alt="" />
          <button>{ product }</button>
          <button>BUY</button>
    </div>
  )
}

export default TabsCard