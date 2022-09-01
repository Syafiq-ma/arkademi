import { useState, useRef, useEffect } from 'react';
import Discount from '../assets/discount.png'
import Card from './Card'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const FlashSale = () => {
    const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
    return(
        <div className='md:px-28 px-4 mt-7'>
            <div className='flex items-center'>
                <img src={Discount} width={35} alt="trending"/>
                <div className='text-black font-extrabold text-2xl ml-3 mr-5'>Flash Sale</div>
                <div className='text-gray-100 font-semibold text-base mr-2'>Berakhir dalam</div>
                <div className='text-white font-bold text-base px-3 py-1 rounded-3xl' style={{backgroundImage: 'linear-gradient(225.66deg, #FFAA5D -30.42%, #F63C3C 91.94%)'}}>08 : 52 : 05</div>
            </div>
            <div className="carousel mt-6">
                <div className="relative flex items-center">
                    <div className="flex justify-between items-center z-10 absolute w-full">
                    <button
                        className='text-md bg-white px-2 py-2 rounded-full relative' 
                        onClick={movePrev}
                        style={{boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.147427)', marginLeft:'-17px'}}
                        >
                        <FiChevronLeft />
                        </button>
                        <button
                        className='text-md bg-white px-2 py-2 rounded-full relative'
                        onClick={moveNext}
                        style={{boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.147427)', marginRight:'-17px'}}
                        >
                        <FiChevronRight />
                        </button>
                    </div>
                    <div
                        ref={carousel}
                        className="carousel-container relative flex gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    >
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashSale