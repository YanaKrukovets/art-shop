import React from 'react';
import Product from './Product';

const Cards = ({products, type}) => {
    return (<div className="products-container">
        {products?.map(
          (product) => <Product key={product._id} product={product} type={type} />
        )}
      </div>);
}

export default Cards;