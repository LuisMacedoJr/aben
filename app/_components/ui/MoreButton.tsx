
import Image from "next/image";

import arrow from "@/public/arrow.svg"

export default function MoreButton () {
    return (
        <div className="flex flex-row justify-between items-center gap-1">
            <span className="text-xl text-[var(--black)]">Mais</span>
            <Image
                src={arrow}
                alt=""
            />
        </div>
    )

}