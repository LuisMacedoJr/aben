import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

import navDiv from "@/public/navDiv.svg";

const links = [
    {
        id: 0,
        name: "Home",
        href: "/"

    },
    {
        id: 1,
        name: "Conheça",
        href: "/conheca"
    },
    {
        id: 2,
        name: "Notícias",
        href: "/noticias"

    },
    {
        id: 3,
        name: "Publicações",
        href: "/publicacoes"

    },
    {
        id: 4,
        name: "Eventos",
        href: "/eventos"

    },
    {
        id: 5,
        name: "Arquivo",
        href: ""

    },
    {
        id: 6,
        name: "Associe-se",
        href: ""

    },
    {
        id: 7,
        name: "Contato",
        href: ""

    }
]


interface NavBarProps {
    visible: boolean;
}

export default function NavBar({
    visible = false,
}: NavBarProps) {

    const linksLength = links.length - 1;

    const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    return (!isTabletOrDesktop ? (
        <motion.div className="absolute bg-[var(--navy-blue-transparent)] w-screen p-4 py-8 z-50"
            initial={{ opacity: 0, y: -10 }} // Start invisible and 10px up
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }}   // Animate to visible and original position
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
                pointerEvents: visible ? "auto" : "none",
            }}
            aria-expanded={visible}
        >
            <nav className="flex flex-col gap-8 items-end text-lg">
                {links.map((link) => (
                    <div key={link.id} className="text-[var(--faded-white)]">
                        <Link
                            key={link.id}
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))}
            </nav>
        </motion.div>
    ) : (
        <nav className="relative flex items-center gap-4">
            {links.map((link, index) => (<>

                <div key={link.id} className="text-[var(--faded-white)]">
                    <Link
                        key={link.id}
                        href={link.href}
                    >
                        {link.name}
                    </Link>

                </div>
                {(() => {
                    console.log(index);
                    if (index != linksLength) {
                        return (
                        <Image
                            src={navDiv}
                            alt=""
                        />
                        )
                    }
                })()}
            </>
            ))}
        </nav>
    ));
}