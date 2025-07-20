export const ImageSectionComponent = () => {
    return (
        <section
            id="image"
            className="relative bg-bigImg min-h-[350px] bg-cover bg-center before:bg-black/20 before:w-full before:inset-0 before:absolute before:flex before:items-center before:justify-center"
        >
            <div className="max-w-5xl mx-auto relative z-10">
                <p className="text-white/80 text-4xl h-full sm:max-w-[200px] sm:text-left py-20 uppercase font-bold text-center">
                    go ahead and build your own pizza we won't judge
                </p>
            </div>
        </section>
    );
};
