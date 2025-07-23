import { Link } from "react-router-dom";

interface NavItemsProps {
    path: string;
    svg: React.ReactNode | null;
    text: string;
}
export const NavItemsComponent = ({ path, svg, text }: NavItemsProps) => {
    return (
        <li>
            {
                path.startsWith("#") ?
                    <a href={path} className="flex items-center justify-center gap-1 py-2 px-3  rounded  md:bg-transparent uppercase hover:text-primary  text-sm group">
                        {svg}
                        {text}
                    </a>
                    :

                    <Link
                        to={path}
                        className="flex items-center justify-center gap-1 py-2 px-3  rounded  md:bg-transparent uppercase hover:text-primary  text-sm group"
                    >
                        {svg}
                        {text}
                    </Link>
            }
        </li>
    );
};