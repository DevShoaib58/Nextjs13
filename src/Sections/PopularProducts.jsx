import PopularProductCard from "../Components/PopularProductCard";
import { products } from "../Constants";

const PopularProducts = () => {
    return (
        <div id="#products" className="max-conatiner  max-sm:mt-12 ">
            <div className="flex flex-col justify-center gap-5">
                <h2 className=" text-4xl font-palanquin font-bold">
                    Our <span className=" text-coral-red">Popular</span>Products
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
                <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-m sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                    {products.map((product) => (<>
                        <PopularProductCard key={product.name} {...product} />
                    </>))}
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;