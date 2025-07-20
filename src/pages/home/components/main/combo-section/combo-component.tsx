interface ComboComponentProps {
    objElement: {
        price: string;
        name: string;
        description: string;
    };
}

export const ComboComponent = ({ objElement }: ComboComponentProps) => {
    return (
        <div className="flex gap-3 my-3">
            <div className="text-primary font-bold">{objElement.price}</div>
            <div>
                <h3 className="uppercase mb-3 font-[500]">{objElement.name}</h3>
                <p className="text-sm text-zinc-400">{objElement.description}</p>
            </div>
        </div>
    );
};
