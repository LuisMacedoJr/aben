import MoreButton from "../ui/MoreButton";
import NoticiasTitulo from "../ui/NoticiasTitulo";
import NoticiasCard from "../ui/NoticiasCard";

import noticia1 from "@/app/_assets/noticias/noticia-1.png";
import noticia2 from "@/app/_assets/noticias/noticia-2.png";
import noticia3 from "@/app/_assets/noticias/noticia-3.png";

const NOTICIAS = [
    {
        id: 1,
        img: noticia1,
        text: "ELEIÇÕES ABEn Nacional e ABEn-RS: Último dia para votar!",
        date: "2026-02-30T01:03:18.987"
    },
    {
        id: 2,
        img: noticia2,
        text: "ABEn-RS divulga chapa homologada para eleição da nova Diretoria Estadual para 2025...",
        date: "2026-04-30T01:03:18.987"

    },
    {
        id: 3,
        img: noticia3,
        text: "ELEIÇÕES ABEn Nacional e ABEn-RS: Último dia para votar!",
        date: "2026-04-12T01:03:18.987"

    }
]

export default function Noticias() {
    return (
        <div className=" flex flex-col justify-center gap-6">
            <div className="grow flex flex-row items-center justify-between">
                <NoticiasTitulo />
                <MoreButton />

            </div>
            {NOTICIAS.map((noticia) => (
                <NoticiasCard key={noticia.id} props={noticia} />

            ))}

        </div>
    )
}