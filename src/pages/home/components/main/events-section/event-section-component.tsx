import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const eventsArray = [
    {
        day: "02",
        month: "nov",
        name: "TRADITIONAL NAPOLITAIN PIES IN KYOTO PIZZA MERCATO",
        location: "204 E. Pizzetta Tommaso",
    },
    {
        day: "03",
        month: "nov",
        name: "terrazza patio dining space opening this weekend",
        location: "204 E. Pizzetta Tommaso",
    },
    {
        day: "05",
        month: "nov",
        name: "sienna private dining room with stépane brunn",
        location: "204 E. Pizzetta Tommaso",
    },
    {
        day: "06",
        month: "nov",
        name: "sienna private dining room with stépane brunn",
        location: "204 E. Pizzetta Tommaso",
    },
    {
        day: "07",
        month: "nov",
        name: "sienna private dining room with stépane brunn",
        location: "204 E. Pizzetta Tommaso",
    },
];

export const EventSectionComponent = () => {
    return (
        <section id="events" className="md:flex mt-10 mb-2 lg:h-[500px]">
            <div className="w-full min-h-[500px] md:w-1/2 bg-events bg-center/bottom lg:bg-bottom bg-cover bg-no-repeat md:order-2"></div>
            {/* right section */}
            <div className="md:w-1/2 h-[300px] md:h-full bg-cielo text-white py-8 overflow-auto md:order-1">
                <div className="max-w-[80%] mx-auto">
                    <div className="uppercase mb-5">
                        <p className="text-xs text-primary">made with love</p>
                        <h2 className="text-xl font-bold">delish pizza deals</h2>
                    </div>
                    <ul>
                        {eventsArray.map((event, index) => (
                            <li
                                key={index}
                                className="pt-5 pb-7 flex gap-3 [&:not(:last-child)]:border-b border-dashed border-[#ffa500]"
                            >
                                <div>
                                    <h3 className="text-3xl text-primary text-center">
                                        {event.day}
                                    </h3>
                                    <p className="uppercase text-center font-bold text-xs">
                                        {event.month}
                                    </p>
                                </div>
                                {/* <!--date--> */}
                                <div>
                                    <p className="uppercase font-bold text-sm">{event.name}</p>
                                    <span className="text-primary text-sm capitalize">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        {event.location}
                                    </span>
                                </div>
                                {/* <!--description--> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <!--left section--> */}
        </section>
    );
};
