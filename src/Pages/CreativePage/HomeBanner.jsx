const HomeBanner = () => {
    return (
        <section className=" h-4/5 bg-black items-center justify-center p-40">
            <h1 className="text-primary font-bold text-center text-8xl pt-40 font-montserrat">CREATIVE</h1>
            <p className=" text-slate-gray max-w-2xl text-center m-auto pb-4 text-xl">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
            <div className="text-center mt-4">
                <a className=" uppercase border border-gray-50 text-slate-gray p-4 rounded-md m-auto text-center font-bold hover:text-white" href="">Conatact Us</a>
            </div>
        </section>
    );
};

export default HomeBanner;