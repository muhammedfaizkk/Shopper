import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import Newcollections from '../components/newCollections/Newcollections'
import Newsletter from '../components/newsLetter/Newsletter'



function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
       <Newcollections/>
      <Newsletter/> 
    </div>
  )
}

export default Shop
