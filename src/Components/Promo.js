import React from "react";
import Promo1 from '../assets/Promo1.png'
import Promo2 from '../assets/Promo2.png'
import Promo3 from '../assets/Promo3.png'

const Promo = () => {
    return(
        <div className='md:px-28 px-4 mt-14'>
            <div className='font-extrabold text-xl mb-7'>Promo Spesial Untukmu</div>
            <div className='flex flex-wrap gap-6'>
                <img src={Promo1} width={392} alt="promo"/>
                <img src={Promo2} width={392} alt="promo"/>
                <img src={Promo3} width={392} alt="promo"/>
            </div>
        </div>
    )
}

export default Promo