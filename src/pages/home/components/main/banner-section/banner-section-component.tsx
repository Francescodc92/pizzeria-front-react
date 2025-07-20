import { SwiperSlide } from "swiper/react";
import { SwiperComponent } from "../../../../../components/swiper-componet/swiper-component";
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