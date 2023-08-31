import { useState } from "react";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { shoes, statistics } from "../Constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section
            id="home"
            className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddind-x pt-28">
                <p className=" text-xl font-montserrat text-coral-red">Our Summer Colection</p>
                <h1 className=" mt-10  font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrivel</span>
                    <br></br>
                    <span className=" text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">Discover New Design and Shoes</p>
                <Button label="Show now" iconURL={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">{statistics.map((item, index) => (<div key={index}><p className=" text-4xl font-palanquin font-bold">{item.value}</p><p className=" leading-7 font-montserrat text-slate-gray">{item.label}</p></div>))}</div>
            </div>
            <figure className=" relative flex-1 flex justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover bg-center max-sm:mb-40"><img src={bigShoeImg} alt="Show Collection" width={610} height={500} className=" object-contain relative z-10 mb-10 "></img>
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) => (<div key={shoe}>
                        <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => { setBigShoeImg(shoe) }} bigShoeImg={bigShoeImg} />
                    </div>))}
                </div>
            </figure>
        </section >
    );
};

export default Hero;