import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TestimonialObjProps {
    testimonialObj: { text: string; person: string }
}

export const TestimonialComponent = ({
    testimonialObj,
}: TestimonialObjProps) => {
    return (
        <div className="max-w-xl mx-auto font-bold text-zinc-500 text-center text-sm lg:text-lg px-3">
            <p className="testimonial max-w-xl text-center mx-auto relative">
                {testimonialObj.text}
                <span className="block text-primary uppercase font-normal mt-3">
                    {testimonialObj.person}
                </span>
                <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="absolute -top-[30px] left-0 md:-left-10 text-3xl text-[#b7903c]"
                />
                <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="absolute bottom-0 md:bottom-4 right-0 md:-right-10 text-3xl text-[#b7903c]"
                />
            </p>
        </div>
    );
};
