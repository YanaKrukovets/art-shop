import React, { useState }  from 'react';
import { client, urlFor } from '../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Product from './Product';
import { useStateContext } from '../context/StateContext';


const ProductDetails = ({product, products}) => {
    const {image, name, details, price, size, materials} = product;
    const [index, setIndex] = useState(0);
    const {incQty, decQty, qty, onAdd, setShowCart} = useStateContext(); 

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    }

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image[index])} 
                        className="product-detail-image" />
                    </div>
                    <div className="small-images-container">
                        {
                            image?.map((item, i) => (
                            <img key={i} src={urlFor(item)} 
                            className={i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <h4>Details:</h4>
                    <p>{details}</p>
                    <h4>Size:</h4>
                    <p>{size}</p>
                    <h4>Materials:</h4>
                    <p>{materials}</p>
                    <p className="price">CA${price}</p>
                    <div className="quantity">
                        <h3>Quantity</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                            <span className="num">{qty}</span>
                            <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                        </p>
                        <p>Unique. Only one example</p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                        <button type="button" className="buy-now" onClick={handleBuyNow}>Buy now</button>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products.map((item) => 
                            <Product key={item._id} product={item} type='product' />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;