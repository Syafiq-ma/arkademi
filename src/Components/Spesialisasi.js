import { useState, useRef, useEffect } from 'react';
import Akuntansi from '../assets/Akuntansi.png'
import K3 from '../assets/K3.png'
import K3LL from '../assets/K3LL.png'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Spesialisasi = () => {
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

  return (
    <div className='my-5 mx-4 md:mx-28 flex flex-col'>
        <div className="carousel">
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
                className="carousel-container relative flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                <div className='bg-cover flex font-extrabold text-base items-center pl-7 text-black rounded-lg' style={{backgroundImage: `url(${Akuntansi})`, width:'420.44px', height:'109px'}}>
                    Menjadi Ahli &nbsp;<span className='text-blue-100'> Akuntansi</span>
                </div>
                <div className='bg-cover font-extrabold text-base items-center text-black p-7 rounded-lg' style={{backgroundImage: `url(${K3})`, width:'420.44px', height:'109px'}}>
                    Menjadi Ahli&nbsp;
                    <span className='text-blue-100'>K3 (Kesehatan & Keselamatan Kerja)</span>
                </div>
                <div className='bg-cover font-extrabold text-base items-center text-black px-7 py-5 rounded-lg' style={{backgroundImage: `url(${K3LL})`, width:'420.44px', height:'109px'}}>
                    Menjadi Ahli&nbsp;
                    <span className='text-blue-100'>Kesehatan, Keselamatan Kerja & Perlindungan Lingkungan (K3LL)</span>
                </div>
                </div>
            </div>
        </div>
        <button className='text-xs text-gray-50 font-bold border rounded-md mt-6 p px-5 py-3 mx-auto' style={{borderColor:'#C0C2C6'}}>Lihat Semua Spesialisasi</button>
    </div>
  );
};

export default Spesialisasi;
