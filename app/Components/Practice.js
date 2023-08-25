import React from 'react';

const Practice = () => {
    return (
        <div>
            <main>
                <div>
                    <h1 className=" h-10 text-center white w-full p-2 my-2">Hello World</h1>
                </div>
                <div>
                    <h1 className="bg-violet-200 h-10 text-center white w-full p-2  border-violet-500 bottom-2 border-2 rounded-md my-2">Hello World</h1>
                </div>
                <div className="fixed bg-red-500 w-10 h-10 top-0">
                </div>
                <div className="flex justify-between space-x-2">
                    <div className=" h-16 w-16 bg-blue-500 rounded-full text-center p-5">1</div>
                    <div className=" h-16 w-16 bg-blue-500 rounded-full text-center p-5">2</div>
                    <div className=" h-16 w-16 bg-blue-500 rounded-full text-center p-5">3</div>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                            <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                            <div className="relative mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
                            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                </section>
                <div className="container mx-auto">
                    <ul className="">
                        <li className="first:bg-green-200 p-2">1 item</li>
                        <li className="even:bg-yellow-200 odd:bg-blue-200 p-2 mt-2">1 item</li>
                        <li className="even:bg-yellow-200 odd:bg-blue-200 p-2 mt-2">1 item</li>
                        <li className="even:bg-yellow-200 odd:bg-blue-200 p-2 mt-2">1 item</li>
                        <li className="even:bg-yellow-200 odd:bg-blue-200 p-2 mt-2">1 item</li>
                        <li className="even:bg-yellow-200 odd:bg-blue-200 p-2 mt-2">1 item</li>
                    </ul>
                </div>
                <div className="FullPageSection bg-emerald-500">
                    <h1 className=" text-2xl">Section 1</h1>
                </div>
                <div className="FullPageSection bg-blue-500">
                    <h1 className=" text-2xl">Section 2</h1>
                </div>
                <div className="FullPageSection bg-red-500">
                    <h1 className=" text-2xl">Section 3</h1>
                </div>
            </main>
        </div>
    );
};

export default Practice;