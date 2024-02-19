import React from 'react'
import './relativeproduct.css'
import { useSelector } from 'react-redux'

import Item from '../items/Item';
function Relativeproduct() {
    const data = useSelector((state) => state.productdatas.producrsdata)
    const newData = data.products
    console.log(newData);
    
    return (
        <div className='relativeproduct'>
            <div className="relativeproduct-parent">
                <h1>Relative Product</h1>
                <hr />
                <div className="relative-pro-item">
                    {newData && newData.map((item, index) => (
                        <Item key={index} id={item.id} name={item.name} image={`../${item.image}`} new_price={item.new_price} old_price={item.old_price} />
                      
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Relativeproduct
