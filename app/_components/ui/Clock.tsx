import Image from "next/image";

import getElapsedTime from "@/app/_lib/getElapsedTime";

import clock from "@/public/clock.svg";
import { base } from "framer-motion/client";


interface ClockProps {
    variant: "noticias" | "publicacoes";
    className?: string;
    date: string;
}


export default async function Clock({
    variant = "noticias",
    className = "",
    date,
    }: ClockProps) {

    const baseStyles = "absolute  rounded-tl-lg flex flex-row items-center  justify-center bg-[var(--violet)] text-[var(--white)] p-1 gap-1";

    const variants = {
        noticias: "self-end bottom-0",
        publicacoes: "self-end bottom-0"
    }

    const response = await getElapsedTime({date});
    


    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            <Image
                src={clock}
                alt="clock icon"
                className=""
            />
            <p className="block text-center shrink">
                {`${response}`}
            </p>
        </div>

    );

}