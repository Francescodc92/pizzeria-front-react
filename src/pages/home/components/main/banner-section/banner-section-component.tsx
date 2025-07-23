import { SwiperComponent } from "@/components/swiper-component/swiper-component";
import { SwiperSlide } from "swiper/react";
import { CardComponent } from "./card-component";
const imagesPathArray = [
    "../../src/assets/img/h3-img-1.jpg",
    "../../src/assets/img/h3-img-2.jpg",
    "../../src/assets/img/h3-img-3.jpg",
    "../../src/assets/img/h3-img-4.jpg",
];

export const BannerSectionComponent = () => {
    return (
        <section id="banner" className="my-1 ">
            <SwiperComponent>
                {imagesPathArray.map((path, index) => (
                    <SwiperSlide key={index}>
                        <CardComponent elementImgPath={path} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </section>
    )
}