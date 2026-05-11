'use client';

import { useState } from 'react';
import "@/app/globals.css";
import Image from "next/image";
import logo from "@/public/logo_aben.svg";
import NavShowButton from '../ui/NavShowButton';
import NavBar from './NavBar';
import { useMediaQuery } from 'react-responsive';


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });


    return (
        <>
            <div className="shrink-0 w-screen bg-[var(--navy-blue)] h-[10vh] p-4 flex flex-row items-center justify-between">

                <Image
                    src={logo}
                    alt="logotipo da ABEN-RS"
                />
                {isTabletOrDesktop && <NavBar visible={isOpen} />}

                {!isTabletOrDesktop && <NavShowButton props={toggleMenu} />}

            </div>
            {!isTabletOrDesktop &&
                <div>
                    <NavBar visible={isOpen} />
                </div>
            }
        </>
    );
}