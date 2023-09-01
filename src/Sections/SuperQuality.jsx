import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
    return (
        <div id="#about-us" className="flex flex-1 justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                <h1 className=" mt-10  font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrivel</span>
                    <br></br>
                    <span className=" text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">Discover New Design and Shoes</p>
                <Button label="Show now" iconURL={arrowRight} />
            </div>
        </div>
    );
};

export default SuperQuality;