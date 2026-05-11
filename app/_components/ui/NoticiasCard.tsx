import Image, { StaticImageData } from "next/image"
import Clock from "./Clock"
import ISODateToLocal from "@/app/_lib/ISODateToLocal";
import { PageName } from "@/types/PageName";



interface NoticiasCardProps {
    variant?: PageName;
    noticia: {
        id: number;
        img: StaticImageData;
        text: string;
        date: string;
    }
}


export default function NoticiasCard({
    variant = 'home',
    noticia
}: NoticiasCardProps) {



    return (
        <div className="relative h-52 max-w-[340px] flex flex-col rounded-lg shadow-md overflow-hidden">
            <Image
                src={noticia.img}
                alt=""
                className="aspect-auto"

            />
            <div className="p-3 bg-[var(--faded-white)] grow overflow-hidden">
                <h2>{noticia.text}</h2>
            </div>

            {(() => {
                if (variant == 'noticias' || variant == 'eventos') {
                    const date = ISODateToLocal(noticia.date);
                    return (
                        <div className="w-full flex justify-center items-center bg-[var(--faded-white)] pb-4">
                            <p>
                                {`${date}`}
                            </p>
                        </div>
                    )
                } else {
                    return <Clock date={noticia.date} variant="noticias" className="" />
                }
            })()}

        </div>
    )

}