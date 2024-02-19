import React, { useEffect } from 'react'
import './shopcategory.css'
import Dropdown_Icons from '../assets/dropdown_icon.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllpro } from '../redux/allproductSlice'
import Item from '../components/items/Item'

function Shopcategory(props) {
  const selector = useSelector((state) => state.allProductsData.allproductData.products)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('./allproducts.json')
      .then((data) => dispatch(getAllpro(data.data)))
      .catch((err) => console.log("err" + err))
  }, [])


  return (
    <div className='Shopcategory'>
      <div className="Shopcategoryparent">
        <img src={props.banner} alt="" />
      </div>
      <div className="shopcategoryindexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={Dropdown_Icons} alt="" />
        </div>
      </div>
      <div className="shop_category_products">
        {selector && selector.map((item, index) => (
          props.category === item.category ? (
            <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ) : null

        ))}
      </div>
      <div className="Explore-More">
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
