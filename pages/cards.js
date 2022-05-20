import React from 'react';

import { Cards } from '../components';
import { client } from '../lib/client';

const Home = ({products}) => {
  return (
    <>
      <div className="products-banner">
        <h3>Cards</h3>
        <p>Little hand painted cards about 110mm X 165mm size can be used as post or greeting cards. Also can be framed as a mini artwork.
Good for collectors.</p>
      </div>
      <Cards products={products} type='product' /> 
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: {products}
  };
}
export default Home;