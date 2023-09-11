import Button from "../Components/Button";
import image8 from "../assets/images/shoe8.svg"
const SuperQuality = () => {
    return (
        <div id="#about-us" className="flex flex-1 justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                <h1 className=" mt-10  font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrivel</span>
                    <br></br>
                    <span className=" text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="info-text font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-4 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesen </p>
                <p className="info-text font-montserrat text-slate-gray text-lg leading-8 lg:max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    harum quisquam eius sed odit fugiat iusto fuga praesen </p>
                <div className="mt-11">
                    <Button className=" rounded border-r-8" label="View Details" />
                </div>
            </div>
            <div className=" flex-1 flex justify-center items-center">
                <img src={image8} alt="Image8" className=" object-contain" />
            </div>
        </div>
    );
};

export default SuperQuality;