import { SwiperComponent } from "@/components/swiper-component/swiper-component";
import { SwiperSlide } from "swiper/react";
import { EmployeeComponent } from "./employee-component";


const employeesArray = [
    {
        link: "../../src/assets/img/h1-team-1a-700x700.jpg",
        name: "giovanni rossi",
        role: "cameriere",
    },
    {
        link: "../../src/assets/img/h1-team-2a.jpg",
        name: "valeria verdi",
        role: "barista",
    },
    {
        link: "../../src/assets/img/h1-team-3a.jpg",
        name: "michela rossi",
        role: "manager",
    },
    {
        link: "../../src/assets/img/h1-team-4a.jpg",
        name: "giacomo rossi",
        role: "cuoco",
    },
];

export const EmployeeSectionComponent = () => {
    return (
        <section id="employee" className="my-1">
            <SwiperComponent>
                {employeesArray.map((path, index) => (
                    <SwiperSlide key={index}>
                        <EmployeeComponent
                            link={path.link}
                            name={path.name}
                            role={path.role}
                        />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </section>
    );
};
