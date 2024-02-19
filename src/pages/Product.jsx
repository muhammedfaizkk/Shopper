import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/breadcrum/Breadcrum'
import Productdisplay from '../components/productdisplay/Productdisplay'
import Description from '../components/description/Description'
import Relativeproduct from '../components/relativeproduct/Relativeproduct'

function Product() {
  const selector = useSelector((state) => state.allProductsData.allproductData.products)
  const { productId } = useParams()
  let product;
  if(selector){
     product = selector.find((e) => e.id === Number(productId));
  }
  return (
    <div>
      
      {/* <Breadcrum product={product} /> */}
      <Productdisplay product={product}/>
      <Description/>
      <Relativeproduct/>
    </div>
  )
}

export default Product
