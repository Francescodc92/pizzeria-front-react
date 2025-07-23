import type { ReactNode } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";

export const SwiperComponent = ({ children }: { children: ReactNode }) => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={5}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            }}
            modules={[Autoplay]}
        >
            {children}
        </Swiper>
    );
};
