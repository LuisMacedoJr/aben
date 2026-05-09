import Image from "next/image";

import speaker from "@/public/speaker.svg"

export default function NoticiasTitulo() {
    return (
        <div className="flex flex-row justify-between items-center gap-1">
            <span className="text-xl text-[var(--black)]">Notícias</span>
            <Image
                src={speaker}
                alt=""
            />
        </div>
    )

}