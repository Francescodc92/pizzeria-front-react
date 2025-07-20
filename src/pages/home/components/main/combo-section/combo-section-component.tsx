import { ComboComponent } from "./combo-component";

const combosArray = [
    {
        price: "$10",
        name: "combo piccolo",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.",
    },
    {
        price: "$20",
        name: "combo medio",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.",
    },
    {
        price: "$30",
        name: "combo grande",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.",
    },
];

export const ComboSectionComponents = () => {
    return (
        <section
            id="specialsCombos"
            className="lg:h-[500px] flex flex-col lg:flex-row my-2"
        >
            <div className="overflow-hidden relative h-full lg:w-[45%] before:content-[url('/src/assets/img/h1-img-7n.png')] before:bg-black/20 before:w-full before:inset-0 before:absolute before:flex before:items-center before:justify-center">
                <img
                    className="h-full w-full object-cover object-top"
                    src="../../src/assets/img/h1-img-4.jpg"
                    alt=""
                />
            </div>
            <div className="lg:w-[55%]">
                <div className="pt-4 lg:pt-10 px-3 lg:ps-10">
                    <h2 className="text-xl uppercase font-bold mb-2">Specials*</h2>
                    <p className="text-zinc-400 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
                        eaque!
                    </p>
                </div>
                <div className="px-3 lg:ps-10">
                    {combosArray.map((combo, index) => (
                        <ComboComponent objElement={combo} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
