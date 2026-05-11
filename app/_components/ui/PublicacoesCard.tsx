import Image, { StaticImageData } from "next/image"
import ISODateToLocal from "@/app/_lib/ISODateToLocal";

import Clock from "./Clock";

type PageName = 'home' | 'publicacoesPage';


interface PublicacoesCardProps {
    variant?: PageName;
    publicacao: {
        id: number;
        img: StaticImageData;
        text: string;
        date: string;
    }
}


export default function PublicacoesCard({
    variant = 'home' as PageName,
    publicacao }
    : PublicacoesCardProps) {

    return (
        <div className="relative h-[208px] max-w-[340px] flex flex-row rounded-lg shadow-md overflow-hidden">
            <Image
                src={publicacao.img}
                alt=""
                className="aspect-auto"

            />
            <div className="flex flex-col">
                <div className="p-3 bg-[var(--faded-white)] grow overflow-hidden">
                    <h2>{publicacao.text}</h2>
                </div>
                {(() => {
                    if (variant == 'home') {
                        return (
                            <Clock variant="publicacoes" date={publicacao.date} />
                        )
                    } else if (variant == 'publicacoesPage') {
                        const date = ISODateToLocal(publicacao.date);
                        return (
                            <>
                                <div className="w-full flex justify-center items-center bg-[var(--faded-white)] p-4">
                                    <p>
                                        {`${date}`}
                                    </p>
                                </div>
                            </>
                        );
                    }


                })()}
            </div>

        </div>
    )

}