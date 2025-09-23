import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div>
            <ul className='flex gap-4 justify-center p-4 '>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/comments">Comments</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;