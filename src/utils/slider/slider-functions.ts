interface SliderFunctionProps {
    button: string;
    currentItem: number;
    itemsArray: number;
}

export const sliderFunction = ({
    button,
    currentItem,
    itemsArray,
}: SliderFunctionProps) => {
    let activeItem = 0;
    if (button == "prev") {
        if (currentItem > 0) {
            activeItem = currentItem - 1;
        } else {
            activeItem = itemsArray - 1;
        }
    } else if (button == "next") {
        if (currentItem < itemsArray - 1) {
            activeItem = currentItem + 1;
        } else {
            activeItem = 0;
        }
    }

    return activeItem;
};
