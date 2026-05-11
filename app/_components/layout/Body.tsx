// 'use client';

import Image from "next/image";


import separator from "@/public/separator.svg";
import Noticias from "./Noticias";
import Publicacoes from "./Publicacoes";
// import { useMediaQuery } from 'react-responsive';
import Carousel from "@/app/_components/layout/Carousel";
import CarouselTextWrapper from "./CarouselTextWrapper";
import Title from "./Title";



export default function Body() {

    // const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });


    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 p-8 pt-0 pb-16 ">
                <CarouselTextWrapper
                    title={<Title />}
                    carousel={<Carousel />
                    }
                />


                <Noticias variant='home' />
                <Image
                    src={separator}
                    alt=""
                />
                <Publicacoes />
            </div>

        </>
    );

}