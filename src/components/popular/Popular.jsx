import React, { useEffect } from 'react'
import './Popular.css'
import axios from 'axios'
import { getProducts } from '../../redux/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../items/Item'

function Popular() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.productdatas.producrsdata)
    const newData = data.products
    useEffect(() => {
        axios.get('./data.json')
            .then((data) => dispatch(getProducts(data.data)))
            .catch((err) => alert(err))
    }, [])
    return (
        <div className='popular'>
            <div className='pop-head'>
                <h1>POPULAR IN WOMEN</h1>
            </div>
            <hr />
            <div className="popular-item">
                {newData && newData.map((item, index) => (
                    <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    )
}

export default Popular
