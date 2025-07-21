import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const sports = [
    { title: "Badminton", image: "/badminton.png" },
    { title: "Swimming", image: "/swimming.png" },
    { title: "Football", image: "/football.png" },
    { title: "Badminton", image: "/badminton.png" },
    { title: "Swimming", image: "/swimming.png" },
    { title: "Football", image: "/football.png" },
];

const SportsFormat = () => {
    return (
        <section className="w-full py-20 bg-black text-white text-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 italic">
                Explore <span className="text-green-400 not-italic">Sports Format</span>
            </h2>

            <Swiper
                initialSlide={1}           // 👈 Start with second card
                loop={true}                // ✅ Infinite looping
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={30}
                slidesPerView={1.2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    480: { slidesPerView: 1.2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                modules={[EffectCoverflow, Pagination]}
                className="max-w-7xl px-4 sm:px-6"
            >
                {sports.map((sport, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] h-[360px] bg-white/5 rounded-3xl overflow-hidden backdrop-blur-md border border-white/10 shadow-xl flex flex-col items-center pt-20 pb-4">

                            {/* Background Title */}
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <h1 className="text-4xl sm:text-5xl font-extrabold uppercase text-white opacity-20 tracking-wider drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                                    {sport.title}
                                </h1>
                            </div>


                            {/* Top Image */}
                            <div className="absolute -top-10 z-10">
                                <img
                                    src={sport.image}
                                    alt={sport.title}
                                    className="w-28 h-28 object-contain"
                                />
                            </div>

                            {/* Footer Text */}
                            <div className="relative z-20 mt-auto w-full bg-black/40 backdrop-blur-md p-4 rounded-b-3xl text-center">
                                <h2 className="text-lg font-bold">{sport.title}</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SportsFormat;
