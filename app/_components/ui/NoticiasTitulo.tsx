import Image from "next/image";

import { PageName } from "@/types/PageName";
import speaker from "@/public/speaker.svg"
import { text } from "stream/consumers";

interface NoticiasTituloProps {
    variant?: PageName;
}

export default function NoticiasTitulo({
    variant = 'noticias'
}: NoticiasTituloProps) {

    let text = "";

    switch (variant) {
        case 'noticias':
            text = "Notícias";
            break;
        case 'home':
            text = "Notícias";
            break;
        case 'eventos':
            text = "Eventos";
            break;
        default:
            break;
    }

    return (
        <div className="flex flex-row justify-between items-center gap-1">
            <span className="text-xl text-[var(--black)]">{text}</span>
            <Image
                src={speaker}
                alt=""
            />
        </div>
    )

}