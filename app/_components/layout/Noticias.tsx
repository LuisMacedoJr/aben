import MoreButton from "../ui/MoreButton";
import NoticiasTitulo from "../ui/NoticiasTitulo";
import NoticiasCard from "../ui/NoticiasCard";
import path from 'path';
import getNoticiasSummary from "@/app/_lib/getNoticiasSummary";
import stringToImageData from "@/app/_lib/imgURLtoStatiImageData";
import React from "react";
import { PageName } from "@/types/PageName";

interface NoticiasProps extends React.ReactElement {
    variant?: PageName;
}


export default async function Noticias({
    variant = 'home' as PageName,
}): Promise<NoticiasProps> {
    console.log(process.cwd());

    const NOTICIAS = await getNoticiasSummary();
    await Promise.all(
        NOTICIAS.map(async (noticia) => {
            noticia.img = await stringToImageData(noticia.imgURL);
        })
    );

    return (
        <div className=" flex flex-col justify-center gap-6 " >
            <div className="grow flex flex-row items-center justify-between">
                {(() => {
                    if (variant == 'home') {
                        return (<>
                            <NoticiasTitulo variant={variant}/>
                            <MoreButton />
                        </>
                        );
                    } else if (variant == 'noticias') {
                        return (<>
                            <NoticiasTitulo variant={variant} />
                        </>

                        )
                    } else if (variant == 'eventos') {
                        return (<>
                            <NoticiasTitulo variant={variant} />
                        </>)
                    }
                })()}


            </div>
            <div className="flex flex-col items-center gap-6 lg:flex-row">
            {NOTICIAS.map((noticia) => (
                <NoticiasCard variant={variant} key={noticia.id} noticia={noticia} />

            ))}
            </div>

        </div>
    )
}