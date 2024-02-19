import React, { useState } from 'react'
import './productdisplay.css'
import start_icon from '../../assets/star_icon.png'
import start_dull_icon from '../../assets/star_dull_icon.png'
function Productdisplay(props) {
    const [sliderImage, setsliderImage] = useState(0)
    const { product } = props


    if (!product) {
        return null;
    }
    let imagesList = [
        { src: `../${product.image}` },
        { src: `../${product.image}` },
        { src: `../${product.image}` },

    ]

    const imageHandler = (index) => {
        setsliderImage(index)
    }

    return (
        <div className='Productdisplay'>
            <div className="Productdisplay-left">
                <div className="Productdisplay-imglist">
                    {imagesList && imagesList.map((img, index) => (
                        <img key={index} onMouseOver={() => imageHandler(index)} src={img.src} alt={img.src} />
                    ))}
                </div>
                <div className="Productdisplay-img">
                    <img className="Productdisplay-mainimg" src={imagesList[sliderImage].src} alt={Image} />
                </div>
            </div>
            <div className="Productdisplay-right">
                <div className='product-name'>
                    <h1>{product.name}</h1>
                </div>
                <div className="Productdisplay-right-star">
                    <img src={start_dull_icon} alt={start_dull_icon} />
                    <img src={start_dull_icon} alt={start_dull_icon} />
                    <img src={start_dull_icon} alt={start_dull_icon} />
                    <img src={start_dull_icon} alt={start_dull_icon} />
                    <img src={start_icon} alt={start_dull_icon} />
                    <p>(122)</p>
                </div>
                <div className="prices">
                    <div className="old_pric">
                        ${product.old_price}
                    </div>
                    <div className="new_price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product_description">
                    <span>
                        I took the 5 most popular dresses from AliExpress at the time
                        of writing and set out to write descriptions at least 200 words long. Each

                    </span>

                </div>
                <div className="product_display-rightsize">
                    <h1>Select size</h1>
                    <div className="product_display-rightsize-sub">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <div className="add-to-cart">
                    <button>ADD TO CART</button>
                    <p className="product-right-category">
                        Ctegory: <span>women t-shirt,crop-top</span>
                    </p>
                    <p className="product-right-category">
                        Tags: <span>Modern,Lateast</span>
                    </p>
                </div>
                
            </div>

        </div>
    )
}

export default Productdisplay
