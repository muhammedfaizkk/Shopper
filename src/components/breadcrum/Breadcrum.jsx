import React from 'react';
import './breadcrum.css';
import arro_icon from '../../assets/breadcrum_arrow.png';
 
function Breadcrum(props) {
  const { product } = props;
  if (!product) {
    return null;
  }

  return (
    <div className='breadcrum'>
     <span> HOME <img src={arro_icon} alt='' />
      <img src={arro_icon} alt='' />
      {product.category}
      <img src={arro_icon} alt='' />
      {product.name}</span>
    </div>
  );
}

export default Breadcrum;
