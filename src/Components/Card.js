import React from "react";
import Image from '../assets/coba.png'
import Star from '../assets/star.png'

const Card = () => {
    return(
        <div className="rounded-xl" style={{ boxShadow: '0px 3.5px 4px rgba(0, 0, 0, 0.131556)', height:'262px', width:'231px'}}>
            <img src={Image} width={231} className="rounded-t-xl" alt="header"/>
            <div className="font-bold text-gray-200 mt-4 mx-4" style={{fontSize: '10px'}}>Arkademi</div>
            <div className="text-xs text-black font-bold mt-1 mx-4">Membuat Landing Page Bagi Desainer Website</div>
            <div className="flex items-center text-gray-100 font-bold mt-2 mx-4" style={{fontSize: '11px'}}>
                <img src={Star} width={10} alt="star" className="mr-1"/>
                <div>4.6 <span>( &lt; 1000)</span></div>
            </div>
            <div className="flex items-center mt-3 mx-4">
                <div className="font-extrabold bg-red-100 text-red-200 px-1 rounded mr-1" style={{fontSize:'10.5px', paddingBottom: '2px', paddingTop: '2px'}}>30%</div>
                <div className="text-gray-200" style={{fontSize: '10.5px'}}>Rp 320.000</div>
            </div>
            <div className="font-extrabold text-black text-base mt-2 mx-4">Rp 280.000</div>
        </div>
    )
}

export default Card