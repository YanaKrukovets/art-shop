import React from 'react';

import { Cards } from '../components';
import { client } from '../lib/client';

const Home = ({products}) => {
  return (
    <>
      <div className="products-banner">
        <h3>Posters</h3>
        <p>The artworks about A4 size. Can be framed.</p>
      </div>
      <Cards products={products} type='poster' /> 
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "poster"]';
  const products = await client.fetch(query);

  return {
    props: {products}
  };
}
export default Home;