import { useState } from "react";
import { SliderButtonComponent } from "./slider-button-component";

const sliderHeaderArray = [
    {
        name: "taste",
        src: "../../src/assets/img/h3-rev-img-4.png",
        bg: "bg-taste",
    },
    {
        name: "urban",
        src: "../../src/assets/img/h3-rev-img-6.png",
        bg: "bg-urban",
    },
    {
        name: "crust",
        src: "../../src/assets/img/h3-rev-img-2.png",
        bg: "bg-crust",
    },
];

export const SliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="min-h-[60vh] mt-10 relative overflow-x-hidden py-3">
            {
                <div
                    key={currentIndex}
                    className={`absolute top-0 left-0 w-full h-full flex items-center justify-center`}
                >
                    <div
                        className={`w-full h-[80%] bg-center bg-contain bg-no-repeat ${sliderHeaderArray[currentIndex].bg}`}
                    >
                        <div className="container h-full mx-auto flex flex-col justify-center items-center pb-4">
                            <img
                                className="object-cover max-h-full"
                                src={sliderHeaderArray[currentIndex].src}
                                alt={sliderHeaderArray[currentIndex].name}
                            />
                        </div>
                    </div>
                </div>
            }

            <div className="flex absolute bottom-5 left-1/2 -translate-x-1/2">
                {sliderHeaderArray.map((_, index) => (
                    <div
                        className={`w-5 h-5 rounded-full mx-1 cursor-pointer ${index === currentIndex ? "bg-primary" : "bg-gray-600"
                            }`}
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>

            <SliderButtonComponent
                changeIndex={setCurrentIndex}
                currentIndex={currentIndex}
                numberItems={sliderHeaderArray.length}
            />
        </div>
    );
};
