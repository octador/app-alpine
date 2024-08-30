import React, { useState, useEffect, useCallback } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import galerieCar1 from "../../asset/sources-homepage/galerie/A110_PURE_4.jpg";
import galerieCar2 from "../../asset/sources-homepage/galerie/A110_PURE_6.jpg";
import galerieCar3 from "../../asset/sources-homepage/galerie/A110_PURE_8.jpg";

const Hero = () => {
  const slides = [
    {
      src: galerieCar1,
      altText: "Slide 1",
    },
    {
      src: galerieCar2,
      altText: "Slide 2",
    },
    {
      src: galerieCar3,
      altText: "Slide 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const isFirstSlide = prevIndex === 0;
      return isFirstSlide ? slides.length - 1 : prevIndex - 1;
    });
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const isLastSlide = prevIndex === slides.length - 1;
      return isLastSlide ? 0 : prevIndex + 1;
    });
  }, [slides.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000);

    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section data-carousel="slide" id="default-carousel" className="py-16">
      <div className="max-w-[1440px] h-[400px] md:h-[680px] w-full m-auto py-6 px-3 relative group">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].src})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* Optionally, uncomment this section if needed */}
          {/* <div className="absolute left-[10%] right-[50%] top-[25%] w-50 flex justify-center">
            <h1 className="font-bold text-4xl bg-slate-500/20">
              <span className="text-6xl">Alpine</span>, <br />
              Constructeur Automobile
            </h1>
          </div> */}
        </div>

        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
