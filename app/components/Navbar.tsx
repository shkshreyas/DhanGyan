import React from 'react';
import Image from 'next/image';
import "./Navbar.css";
import logo from './assets/logo.png';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Image src={logo} alt="logo" className='logo' width={100} height={100} /> {/* Set width and height */}
            <div className='desktopMenu'>
                <Link href="/" className='desktopMenuListItem'>Home</Link> {/* Internal link */}
                <a href="https://in.linkedin.com/in/shkshreyas" className='desktopMenuListItem'>About</a> {/* External link */}
                <Link href="/LearnGame" className='desktopMenuListItem'>Learn</Link> {/* Internal link */}
                <Link href="/profile" className='desktopMenuListItem'>Profile</Link> {/* Internal link */}
            </div>
            <Link href="/donate" passHref>
            <Button>
                Donate
            </Button>
        </Link>
        </nav>
    );
}

export default Navbar;
