import Image from "next/image";


import separator from "@/public/separator.svg"
import Noticias from "./Noticias";
import Publicacoes from "./Publicacoes";


export default function Body() {

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 p-8 pb-16 ">
                <div className="text-[var(--black)] text-2xl bg-[var(--white)] p-4">
                    <h1>Bem-vindo à ABEn!</h1>
                </div>
                <Image
                    src={separator}
                    alt=""
                />
                <Noticias />
                <Image
                    src={separator}
                    alt=""
                />
                <Publicacoes />
            </div>

        </>
    );

}