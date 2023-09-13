import { star } from "../assets/icons";

const ReviewCard = (imgURL) => {
    return (
        <div className=" flex justify-center items-center flex-col">
            <img src={imgURL.imgURL}
                alt="imgURL"
                className="rounded-full object-cover w-[120px] h-[120px]" />
            <p className="mt-6 max-w-sm text-center info-text">{imgURL.feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5"><img src={star} width={24} height={24} className=" object-contain m-0" />
                <p className=" text-xl font-montserrat text-slate-gray">({imgURL.rating})</p></div>
            <h3 className=" text-3xl font-palanquin font-bold">{imgURL.customerName}</h3>

        </div>
    );
};

export default ReviewCard;