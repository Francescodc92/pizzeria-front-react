import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardComponentProps {
    elementImgPath: string;
}

export const CardComponent = ({ elementImgPath }: CardComponentProps) => {
    return (
        <div className="group relative">
            <img src={elementImgPath} alt="" />
            <div className="hidden absolute inset-0 group-hover:flex justify-center transition-all duration-300 items-center bg-slate-300">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <FontAwesomeIcon icon={faEye} />
                </div>
            </div>
        </div>
    );
};
