import { SwiperComponent } from "@/components/swiper-component/swiper-component";
import { SwiperSlide } from "swiper/react";
import { SponsorComponent } from "./sponsor-component";


const sponsorsInfoArray = [
    {
        link: "../../src/assets/img/h1-clients-img-1.png",
        name: "client 1",
    },
    {
        link: "../../src/assets/img/h1-clients-img-2.png",
        name: "client 2",
    },
    {
        link: "../../src/assets/img/h1-clients-img-3.png",
        name: "client 3",
    },
    {
        link: "../../src/assets/img/h1-clients-img-4.png",
        name: "client 4",
    },
    {
        link: "../../src/assets/img/h1-clients-img-5.png",
        name: "client 5",
    },
];

export const SponsorsSectionComponent = () => {
    return (
        <section id="employee" className="my-1">
            <SwiperComponent>
                {sponsorsInfoArray.map((sponsor, index) => (
                    <SwiperSlide key={index}>
                        <SponsorComponent link={sponsor.link} name={sponsor.name} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </section>
    );
};
