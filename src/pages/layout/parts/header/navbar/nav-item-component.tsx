import { Link } from "react-router-dom";

interface NavItemsProps {
    path: string;
    svg: React.ReactNode | null;
    text: string;
    isActive?: boolean;
}
export const NavItemsComponent = ({ path, svg, text, isActive }: NavItemsProps) => {
    return (
        <li>
            {
                path.startsWith("#") ?
                    <a href={path} className={`flex items-center justify-center gap-1 py-2 px-3  rounded  md:bg-transparent uppercase hover:text-primary  text-sm group ${isActive ? "text-primary" : "text-white"}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25 11"
                            className="w-5 h-5 fill-current group-hover:text-primary transition-all duration-300"
                        >
                            {svg}
                        </svg>
                        {text}
                    </a>
                    :

                    <Link
                        to={path}
                        className={`flex items-center justify-center gap-1 py-2 px-3  rounded  md:bg-transparent uppercase hover:text-primary  text-sm group ${isActive ? "text-primary" : "text-white"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25 11"
                            className="w-5 h-5 fill-current group-hover:text-primary"
                        >
                            {svg}
                        </svg>
                        {text}
                    </Link>
            }
        </li>
    );
};