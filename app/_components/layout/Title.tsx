'use client';

import { useMediaQuery } from 'react-responsive';
import Image from "next/image";

import separator from "@/public/separator.svg"
import star from "@/public/star.svg";



export default function Title() {

    const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    return (!isTabletOrDesktop ? (<><div className="flex flex-col items-center">
        <div className="text-[var(--black)] text-2xl bg-[var(--white)] p-4">
            <h1>BEM-VINDO À ABEN-RS!</h1>
        </div>
        <Image
            src={separator}
            alt=""
        />
        </div>
    </>) : (<div className="flex flex-col justify-between items-center p-8 gap-8">
        <div className="text-[var(--black)] text-2xl bg-[var(--white)]">
            <h1>BEM-VINDO À ABEN-RS!</h1>
        </div>
        <div className="relative w-full h-[20px] flex flex-col items-center justify-center">
            <Image
                src={separator}
                alt=""
                className="absolute"
            />
            <Image
                src={star}
                alt=""
                className="absolute"
            />
        </div>

        <p className='text-center max-w-[60vw] font-serif'>
            A ABEn-RS é uma entidade essencial que defende os interesses, promove a educação e fortalece a identidade da enfermagem no Rio Grande do Sul.
        </p>
    </div>

    )

    );



}