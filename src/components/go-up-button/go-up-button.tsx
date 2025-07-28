import { useEffect, useState } from "react";

export const GoUpButtonComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleButtonClick = () => {
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500)
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => { removeEventListener('scroll', toggleVisibility) }
    }, [])

    return (
        <div
            className={`${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} 
                w-12 h-12 fixed bottom-[80px] right-4 lg:bottom-10 md:right-10 z-[100] 
                bg-slate-200 rounded-full border border-primary transition-opacity duration-300`}
        >       <button onClick={handleButtonClick} className="w-full h-full flex items-center justify-center rounded-full cursor-pointer">
                <img src="/src/assets/svg/svg-4.svg" alt="" />
            </button>
        </div >
    );
};
