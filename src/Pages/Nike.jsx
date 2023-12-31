import Nav from "../Components/Nav";
import { CustomerReviewes, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "../Sections";

const Nike = () => {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-1 wide:paading-r padding-b"><Hero /></section>
            <section className="padding"><PopularProducts /></section>
            <section className="padding"><SuperQuality /></section>
            <section className="padding"><Services /></section>
            <section className="padding"><SpecialOffer /> </section>
            <section className=" bg-pale-blue padding"><CustomerReviewes /></section>
            <section className="padding-x sm:py-32 py-16 w-full "><Subscribe /></section>
            <section className=" bg-black padding-x padding-t pb-8"><Footer /></section>
        </main>
    );
};

export default Nike;