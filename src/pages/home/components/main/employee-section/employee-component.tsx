import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface EmployeeDataProps {
    link: string;
    name: string;
    role: string;
}

export const EmployeeComponent = ({ link, name, role }: EmployeeDataProps) => {
    return (
        <div className="relative cursor-pointer group/container ">
            <img src={link} alt={name} />
            <div className="opacity-0 group-hover/container:opacity-100 absolute inset-0 transition-all duration-300 bg-zinc-200 flex items-center justify-center">
                <div className="w-[90%] h-[90%] bg-primary text-white flex flex-col gap-3 items-center justify-center">
                    <h3 className="uppercase">{name}</h3>
                    <span className="capitalize">{role}</span>
                    <ul className="flex gap-2">
                        <li className="p-2 group/item">
                            <a
                                href=""
                                className="group-hover/item:text-white/30 transition-all text-xl duration-300"
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li className="p-2 group/item">
                            <a
                                href=""
                                className="group-hover/item:text-white/30 transition-all text-xl duration-300"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="p-2 group/item">
                            <a
                                href=""
                                className="group-hover/item:text-white/30 transition-all text-xl duration-300"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
