import Button from "../Components/Button";
import { statistics } from "../Constants";
import { arrowRight } from "../assets/icons";

const Hero = () => {
    return (
        <section
            id="home"
            className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddind-x pt-28">
                <p>Our Summer Colection</p>
                <h1>
                    <span>The New Arrivel</span>
                    <br></br>
                    <span>Nike</span>
                    Shoes
                </h1>
                <p>Discover New Design and Shoes</p>
                <Button label="Show now" iconURL={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">{statistics.map((item, index) => (<div key={index}><p>{item.value}</p><p>{item.label}</p></div>))}</div>
            </div>
        </section>
    );
};

export default Hero;