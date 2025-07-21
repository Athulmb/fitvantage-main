import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const programs = [
  {
    title: "Massive Upper body",
    subtitle: "7 Week · 5x/week",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  },
  {
    title: "Strength & Power",
    subtitle: "5 Week · 4x/week",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  },
  {
    title: "Shredded Physique",
    subtitle: "6 Week · 6x/week",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
  },
  {
    title: "Endurance Boost",
    subtitle: "4 Week · 3x/week",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop",
  },
  {
    title: "Fat Burn Express",
    subtitle: "3 Week · 5x/week",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop",
  },
];

const ProgramCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full py-20 bg-[#0D1310] text-white text-center font-sans">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">
        Our{" "}
        <span className="italic relative inline-block px-1">
          <span className="relative z-10 px-3 py-1">Programs</span>
          <span
            className="absolute inset-0 -inset-y-1 border border-green-500 -skew-x-6 z-0 rounded-sm"
            aria-hidden="true"
          ></span>
        </span>
      </h2>

      {/* Swiper Carousel */}
      <Swiper
       ref={swiperRef}
       effect="coverflow"
       grabCursor={true}
       centeredSlides={true}
       loop={true}
       spaceBetween={30}
       slidesPerView={1}
       speed={600}
       allowTouchMove={true}
       threshold={50}
       longSwipes={false}
       shortSwipes={true}
       coverflowEffect={{
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows: false,
       }}
       pagination={{
           el: ".swiper-custom-pagination",
           clickable: true,
       }}

        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            effect: "slide",
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            effect: "slide",
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 25,
            effect: "slide",
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
            effect: "slide",
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            effect: "coverflow",
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {programs.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[320px] h-[320px] sm:h-[340px] md:h-[360px] rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-xl relative transition-all duration-300 ease-in-out mx-auto hover:scale-105 cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] sm:h-[260px] md:h-[280px] object-cover"
              />
              <div className="absolute bottom-0 w-full h-24 bg-black/50 backdrop-blur-md px-5 py-3 flex flex-col justify-end">
                <h3 className="font-bold text-white text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-custom-pagination mt-8 sm:mt-10 flex justify-center gap-2"></div>
      
      <style jsx>{`
        .swiper-custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-custom-pagination .swiper-pagination-bullet-active {
          background-color: #10b981;
          transform: scale(1.2);
        }
        
        .swiper-slide-active .hover\\:scale-105 {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default ProgramCarousel;