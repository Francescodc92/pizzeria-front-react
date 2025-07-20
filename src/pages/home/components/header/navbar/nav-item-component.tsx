interface NavItemsProps {
    path: string;
    svg: React.ReactNode | null;
    text: string;
}
export const NavItemsComponent = ({ path, svg, text }: NavItemsProps) => {
    return (
        <li>
            <a
                href={`${path}`}
                className="flex items-center justify-center gap-1 py-2 px-3  rounded  md:bg-transparent uppercase hover:text-primary  text-sm group"
            >
                {svg}
                {text}
            </a>
        </li>
    );
};