'use client';

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from 'react';
import ImageFormatter from "@/app/_lib/ImageFormatter";
import CarouselButton from "@/app/_components/ui/CarouselButton";

import aben_video_poster from "@/public/aben_video_screenshot.png"
import img1 from "@/app/_assets/carousel/img-1.png";
import img2 from "@/app/_assets/carousel/img-2.png";
import img3 from "@/app/_assets/carousel/img-3.png";

const CAROUSEL_ELEMENTS = [
    {
        id: 1,
        src: "/aben_video.webm",
        poster: aben_video_poster,
        alt: "video",
        type: "video"
    },
    {
        id: 2,
        src: img1,
        alt: "img1",
        type: "img"
    },
    {
        id: 3,
        src: img2,
        alt: "img2",
        type: "img"
    },
    {
        id: 4,
        src: img3,
        alt: "img3",
        type: "img"
    }
]


import "@/app/globals.css";

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className="embla relative group max-w-lg mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {CAROUSEL_ELEMENTS.map((element) => (
                            <div key={element.id} className="flex-[0_0_100%] min-w-0">
                                <ImageFormatter props={element} />
                            </div>
                        ))

                        }
                    </div>
                </div>
            </div>

            {/* <div className="absolute left-4 top-1/2 -translate-y-1/2 z-100">
                <CarouselButton variant="previous" onClick={scrollPrev}></CarouselButton>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-100">
                <CarouselButton variant="next" onClick={scrollNext}></CarouselButton>
            </div> */}
        </>
    );
}

export default EmblaCarousel;
