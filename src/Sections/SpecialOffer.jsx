import Button from "../Components/Button";
import { offer } from "../assets/images";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className=" object-contain w-full" />
            </div>
            <div className="flex flex-1 flex-col">
                <h1 className=" mt-10  font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className=" text-coral-red inline-block mt-3">Special</span> Offer
                </h1>
                <p className="info-text font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-4 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesen </p>
                <p className="info-text font-montserrat text-slate-gray text-lg leading-8 lg:max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    harum quisquam eius sed odit fugiat iusto fuga praesen </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button className=" rounded border-r-8" label="View Details" />
                    <Button className=" rounded border-r-8" label="View Details" />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;