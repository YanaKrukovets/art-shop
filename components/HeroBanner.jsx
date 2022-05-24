import React from 'react';
import Link from 'next/link';

import {urlFor} from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <img src={urlFor(heroBanner.image)} alt="cards" className="hero-banner-image" />
            </div>
            <div>
                <Link href={`/cards`}>
                    <button type="button">{heroBanner.buttonText}</button>
                </Link>
            </div>
        </div>
    );
}

export default HeroBanner;