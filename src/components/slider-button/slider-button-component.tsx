import { sliderFunction } from "../../utils/slider/slider-functions";

interface SliderButtonComponentProps {
    changeIndex: (index: number) => void;
    currentIndex: number;
    numberItems: number;
}

export const SliderButtonComponent = ({
    changeIndex,
    currentIndex,
    numberItems,
}: SliderButtonComponentProps) => {
    const handleButtonClick = (button: string) => {
        const newIndex = sliderFunction({
            button,
            currentItem: currentIndex,
            itemsArray: numberItems,
        });
        changeIndex(newIndex);
    };

    return (
        <div>
            <button
                className="w-16 h-16 absolute rounded-full bg-white transition-all duration-300 hover:bg-primary hover:text-white uppercase text-xs pb-2 text-primary font-bold bottom-3 sm:bottom-1/2 -translate-y-1/2 sm:translate-y-1/2 -translate-x-1/2 -rotate-90 flex items-end justify-center left-0 border border-primary"
                onClick={() => handleButtonClick("prev")}
            >
                prev
            </button>
            <button
                className="w-16 h-16 absolute rounded-full bg-white transition-all duration-300 hover:bg-primary hover:text-white uppercase text-xs pb-2 text-primary font-bold bottom-3 sm:bottom-1/2 -translate-y-1/2 sm:translate-y-1/2 translate-x-1/2 rotate-90 flex items-end justify-center right-0 border border-primary"
                onClick={() => handleButtonClick("next")}
            >
                next
            </button>
        </div>
    );
};
