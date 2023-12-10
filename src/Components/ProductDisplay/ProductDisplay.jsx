import React from 'react';
import './ProductDisplay.css'
import starIcon from '../Assets/star_icon.png'
import stardullIcon from '../Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-prices'>
                    <div className='right-price-old'>
                        ${product.old_price}
                    </div>
                    <div className='right-price-new'>
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-star">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={stardullIcon} alt="" />
                    <p>(122)</p>
                </div>
                
                <div className='right-description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nihil impedit assumenda, fuga nobis possimus id deserunt delectus ullam at officiis rerum minima, excepturi facilis rem dolorum, perferendis placeat incidunt. Quisquam qui animi eum ipsam error, consectetur, perferendis mollitia, velit officia consequuntur alias architecto. Ut quod voluptate nobis quibusdam molestiae.
                </div>
                <div className='right-size'>
                    <h1>Select Size</h1>
                    <div className='right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>Xl</div>
                        <div>XLL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductDisplay;