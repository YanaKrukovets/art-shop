import React from 'react';
import Link from 'next/link';

import { AiFillInstagram} from 'react-icons/ai';

const FooterBanner = ({ footerBanner: { quote, author, smallText, midText, product, buttonText } }) => {

    return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{quote}</h3>
          <h4>{author}</h4>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p className="icons">
            <a href="https://www.instagram.com/sunny_karamel_art/">Instagram: <AiFillInstagram /></a>
          </p>
          <Link href={`/cards`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner