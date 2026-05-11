import Image from "next/image";

import book from "@/public/book.svg"

export default function PublicacoesTitulo() {
    return (
        <div className="flex flex-row justify-between items-center gap-1">
            <span className="text-xl text-[var(--black)]">Publicações</span>
            <Image
                src={book}
                alt=""
            />
        </div>
    )

}