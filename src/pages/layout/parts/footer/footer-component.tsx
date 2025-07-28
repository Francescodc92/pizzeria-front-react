import {
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const restaurantInfoArray = [
    {
        street: "1614 E. Bell Rd #104.",
        city: "Salerno, AZ 85022",
        contact: "(602)857-1010",
    },
    {
        street: "204 E. Pizzetta Tommaso",
        city: "Sorrento, AZ 85022",
        contact: "(358)867-1010",
    },
    {
        street: "Vale Puglia 54",
        city: "Torre del greco, AZ 85022",
        contact: "(359)867-1010",
    },
    {
        street: "Corso Itali AA",
        city: "Naples, AZ 85022",
        contact: "(989)867-1010",
    },
];

export const FooterComponent = () => {
    return (
        <footer className="lg:flex lg:h-[500px]">
            <div className="w-full min-h-[500px] lg:w-[40%] bg-footerImg bg-center bg-cover bg-no-repeat md:order-2"></div>
            {/* right section */}
            <div className="lg:w-[60%] min-h-[300px] md:h-full bg-cielo text-white overflow-auto md:order-1">
                <div className="h-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-4">
                    <div className="lg:row-span-3 px-2 text-center lg:text-start">
                        <h2 className="uppercase my-3 text-[#b7903c]">
                            find our restaurants
                        </h2>
                        <ul>
                            {restaurantInfoArray.map((restaurant, index) => (
                                <li
                                    key={index}
                                    className="mb-2"
                                >
                                    <div className="flex items-center justify-center lg:justify-start flex-wrap gap-1">
                                        <p className="text-md text-gray-500">{restaurant.street}</p>
                                        <p className="text-md text-gray-500">{restaurant.city}</p>
                                    </div>
                                    <p className="text-md text-primary">{restaurant.contact}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* section top left */}

                    <div className="lg:row-span-3 px-2 py-6 lg:py-0 text-center lg:text-start">
                        <h2 className="uppercase my-3 text-[#b7903c]">work hours</h2>

                        <div>
                            <h3 className="text-[#b7903c] uppercase mb-1">monday</h3>
                            <p className="text-primary">Kitchen Closed</p>
                            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-1 my-2">
                                <h3 className="text-[#b7903c] uppercase">
                                    tuesday until friday
                                </h3>
                                <p className="text-gray-500 capitalize">9:00-22:00</p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-2 my-2">
                                <h3 className="text-[#b7903c] uppercase">
                                    saturday
                                    <span className="text-primary ms-1">*</span>
                                </h3>
                                <p className="text-gray-500 capitalize">
                                    saturday 11am to midnight
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-2 my-2">
                                <h3 className="text-[#b7903c] uppercase">sunday</h3>
                                <p className="text-gray-500 capitalize">9:00-22:00</p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start mt-10">
                            <h3 className="text-[#b7903c] uppercase mb-1">follow us:</h3>
                            <ul className="ms-2 flex gap-2">
                                <li>
                                    <a
                                        href=""
                                        className="p-3 text-xl hover:text-primary transition-all duration-300"
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="p-3 text-xl hover:text-primary transition-all duration-300"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="p-3 text-xl hover:text-primary transition-all duration-300"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="p-3 text-xl hover:text-primary transition-all duration-300"
                                    >
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* section top center */}
                    <div className="lg:row-span-4 pt-5 flex flex-col justify-between relative min-h-[200px]">
                        <h2 className="uppercase my-3 text-white bg-black/50 md:bg-transparent font-bold px-8 text-center relative z-10">
                            the don peppe crew first and foremost values an authentic, well
                            baked slice of pizza.
                        </h2>
                        <div className="w-1/2 h-[180px] bg-footerLogo bg-contain bg-no-repeat bg-center absolute bottom-3 right-5"></div>
                    </div>
                    <div className="lg:col-span-2 flex items-end justify-center py-3">
                        <p className="text-[#b7903c]">
                            Created with
                            <FontAwesomeIcon icon={faHeart} />
                            by
                            <span className="text-green-600">Qode Interactive</span>
                        </p>
                    </div>
                </div>
            </div>
            {/*left section */}
        </footer>
    );
};
