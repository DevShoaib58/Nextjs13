import Link from 'next/link';
import React from 'react';
import { Navlink } from '../Constants';

const Nav = () => {
    return (
        <header className=' p-8 absolute z-10 w-full'>
            <div>
                <Link href='/' ><img src={"../assets/images/header-logo.svg"} /></Link>
                <ul className=' flex'>
                    {Navlink.map((item) => {
                        <><li key={item.label}>
                            <a href={item.link}>{item.label}
                            </a>
                        </li></>
                        console.log('item.Link: ', item.link)
                    })}
                </ul>
            </div>
        </header>
    );
};

export default Nav;