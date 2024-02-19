import React, { useEffect } from 'react'
import './newcollectins.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getNewcollectins } from '../../redux/newCollectins'
import Item from '../items/Item'

function Newcollections() {
    const dispatch = useDispatch()
    const fetchedData = useSelector((state) => state.newCollectionsdata.newCollecData)
    // console.log(fetchedData);
    useEffect(() => {
        axios.get('./newcollections.json')
            .then((data) => dispatch(getNewcollectins(data.data)))
            .catch((err) => alert("Error: " + err))
    }, [])
    return (
        <div className='newcollectins'>
            <div className='newcollectins-head'><h1>NEW COLLECTIONS</h1></div>
            <hr />

            <div className="collections">
                {fetchedData && fetchedData.map((item, index) => (
                    <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    )
}

export default Newcollections
