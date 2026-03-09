import React from 'react'
import IngredientsCard from './ingredientsCard'
import ingredientsImg1 from '../assets/leaf.png'
import ingredientsImg2 from '../assets/water.png'
import ingredientsImg3 from '../assets/gold.png'
const Ingredients = () => {
  return (
      <div className='ingredients-section'>
          <h1 className='reveal reveal-delay-1'>Key Ingredients</h1>
          <p className='reveal reveal-delay-2'>
              Kulit sehat dimulai dari formula yang tepat.
<br />        Kami memilih bahan aktif yang bekerja lembut namun efektif untuk menjaga keseimbangan alami kulit.
          </p>
          <div className="ingredients-card-wrapper">
              <IngredientsCard img={ingredientsImg1} title="Hyaluronic Acid" description="Hidrasi mendalam. Kulit terasa lebih kenyal." delay={3}/>
              <IngredientsCard img={ingredientsImg2} title="Centella Asiatica" description="Menenangkan dan membantu memperkuat lapisan pelindung kulit." delay={4}/>
              <IngredientsCard img={ingredientsImg3} title="Niacinamide" description="Membantu meratakan warna dan meningkatkan kejernihan tampilan kulit." delay={5}/>
          </div>
    </div>  
  )
}

export default Ingredients