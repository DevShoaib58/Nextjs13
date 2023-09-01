import { star } from "../assets/icons";

const PopularProductCard = (imgURL, name,) => {
    return (
        <div className="flex flex-1 flex-col w-full">
            <img src={imgURL.imgURL} alt={name} className="w-[240px] h-[240px]" ></img>
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} width={"24px"} height={"24px"}></img>
                <p className="font-montserrat leading-normal text-slate-gray text-xl">(4.5)</p>
            </div>
            <h3 className="mt-2 font-palanquin font-semibold text-2xl leading-normal">{imgURL.name}</h3>
            <p className="mt-2 font-montserrat text-coral-red text-xl font-semibold leading-normal">{imgURL.price}</p>
        </div>
    );
};

export default PopularProductCard;