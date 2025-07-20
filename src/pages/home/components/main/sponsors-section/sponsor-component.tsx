interface SponsorComponentProps {
    link: string;
    name: string;
}

export const SponsorComponent = ({ link, name }: SponsorComponentProps) => {
    return (
        <div className="py-10">
            <img className="w-full h-full object-contain" src={link} alt={name} />
        </div>
    );
};
