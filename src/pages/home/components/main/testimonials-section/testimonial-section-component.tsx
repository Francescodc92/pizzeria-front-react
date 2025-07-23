import { SliderButtonComponent } from "@/components/slider-button/slider-button-component";
import { useState } from "react";
import { TestimonialComponent } from "./testimonial-component";


const testimonialsArray = [
    {
        text: "forgot the trendy pizza shops, this hidden spot makes the best new york-style pizza slice in naples",
        person: "washington post 2018",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum itaque facere dolor ducimus nobis, cum ratione molestias distinctio blanditiis recusandae nulla fugit, ipsum doloremque explicabo, enim sit esse eaque suscipit ex optio? Aperiam excepturi quasi non quis itaque reiciendis eaque, sequi, consequuntur, recusandae sit ut. Adipisci recusandae tempore debitis?",
        person: "lorem 2019",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus doloribus, vero id natus numquam aperiam, inventore amet odit unde optio! Magnam iste incidunt autem omnis animi debitis harum aut!",
        person: "lorem 2022",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus doloribus, vero id natus numquam aperiam, inventore amet odit unde optio! Magnam iste incidunt autem omnis animi debitis harum aut!",
        person: "lorem 2023",
    },
];

export const TestimonialsSectionComponent = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    return (
        <section
            id="testimonials"
            className="bg-testimonials relative min-h-[450px] md:min-h-[500px] pt-12 flex md:items-center justify-center bg-center bg-cover bg-no-repeat overflow-x-hidden"
        >
            {
                <TestimonialComponent
                    testimonialObj={testimonialsArray[currentTestimonial]}
                />
            }
            <SliderButtonComponent
                changeIndex={setCurrentTestimonial}
                currentIndex={currentTestimonial}
                numberItems={testimonialsArray.length}
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <p className="text-zinc-500">
                    <span className="text-primary">{currentTestimonial + 1}</span>/
                    <span>{testimonialsArray.length}</span>
                </p>
            </div>
        </section>
    );
};
