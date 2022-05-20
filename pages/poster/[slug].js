import React from 'react';
import { client } from '../../lib/client';
import { ProductDetails } from '../../components';

const CurrentPoster = ({product, products}) => {
   return (
       <ProductDetails products={products} product={product} />
   );
}

export const getStaticPaths = async () => {
    const query = `*[_type == "poster"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "poster" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "poster"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { products, product }
    }
  }

export default CurrentPoster;