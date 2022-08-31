import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';
import img1 from '../assets/image1.png';

function Slider() {
  const images = [img1,img1];
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === images.length - 1) {
      setActiveSlide(1);
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  return (
    <div className='m-6 md:px-20 px-2'>
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-md bg-white px-2 py-2 rounded-full relative' 
              onClick={() => prevSliderHandler(index)}
              style={{boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.147427)', marginRight:'-17px'}}
            >
              <FiChevronLeft />
            </button>
            <div className=' w-full'>
              <img
                src={item}
                alt='landscape'
                className=' object-cover w-full'
              />
            </div>
            <button
              className='text-md bg-white px-2 py-2 rounded-full relative'
              onClick={() => nextSliderHandler(index)}
              style={{boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.147427)', marginLeft:'-17px'}}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider;