import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReservationsSectionComponent = () => {
    return (
        <section
            id="reservations"
            className="bg-reservations bg-no-repeat bg-cover bg-center py-16 mb-2"
        >
            <div className="form-wrapper h-full">
                <form className="flex flex-col text-center max-w-[400px] mx-auto lg:max-w-none lg:flex-row lg:items-center h-full px-3 lg:px-0 lg:justify-center gap-3">
                    <div className="bg-white py-4 ps-2 border border-black relative flex items-center">
                        <label
                            htmlFor="person-reservation"
                            className="text-md text-primary"
                        >
                            Persone
                        </label>
                        <input
                            className="outline-0 px-1 w-[150px]"
                            type="number"
                            id="person-reservation"
                            placeholder="1"
                            required
                        />
                        <FontAwesomeIcon
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#b7903c] w-5 h-5"
                            icon={faUserGroup}
                        />
                    </div>
                    <p className="uppercase text-white font-bold">Il</p>
                    <div className="bg-white py-4 ps-2 border border-black relative flex items-center">
                        <label htmlFor="date-reservation" className="text-md text-primary">
                            Giorno
                        </label>
                        <input
                            className="outline-0 px-1 w-[150px]"
                            type="date"
                            id="date-reservation"
                            required
                        />
                        <FontAwesomeIcon
                            icon={faCalendar}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#b7903c] w-5 h-5"
                        />
                    </div>
                    <p className="uppercase text-white font-bold">Alle</p>
                    <div className="bg-white py-4 ps-2 border border-black relative flex items-center">
                        <label htmlFor="hour-reservation" className="text-md text-primary">
                            Ora
                        </label>
                        <input
                            className="outline-0 px-1 w-[150px] font-sm"
                            type="time"
                            id="hour-reservation"
                            placeholder="7:00 pm"
                            required
                        />
                        <FontAwesomeIcon
                            icon={faClock}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#b7903c] w-5 h-5"
                        />
                    </div>
                    <button className="py-5 px-10 text-md font-bold uppercase text-white bg-primary cursor-pointer hover:bg-primary/90">
                        Prenota Un Tavolo
                    </button>
                </form>
            </div>
        </section>
    );
};
