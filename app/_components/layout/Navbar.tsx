'use client';

import { useState } from 'react';
import "@/app/globals.css";
import Image from "next/image";
import logo from "@/public/logo_aben.svg";
import MenuButton from "../ui/MenuButton";
import NavList from '@/app/_components/layout/NavList';


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="text- w-screen bg-[var(--navy-blue)] h-[10vh] p-4 flex flex-row items-center justify-between">

                <Image
                    src={logo}
                    alt="logotipo da ABEN-RS"
                />
                <MenuButton props={toggleMenu} />

            </div>
            {isOpen &&
                <div>
                    <NavList />
                </div>
            }

        </>
    );
}