import ContactButton from "../ui/ContactButton";
import Image from "next/image";

import ide_logo from "@/public/IDE_logo.svg";

export default function Footer () {
    return (
        <div className="flex flex-col items-start bg-[var(--grey)] p-8 gap-8 text-[var(--white)]">
            <div className="flex flex-row items-center justify-between gap-6">
                <ContactButton variant="facebook" />
                <ContactButton variant="instagram" />
                <ContactButton variant="phone" />
                <ContactButton variant="mail" />
            </div>
            <div>
                <p>Porto Alegre - RS</p>
                <p>Av Venâncio Aires, 1191/142 - Bom Fim</p>
                <p>CEP 90040-193</p>
            </div>
            <div className=" flex flex-row items-center justify-between gap-2">
                <p className="leading-none">Desenvolvido pela Empresa Júnior </p>
                <Image src={ide_logo} alt="logo IDEjr"/>
            </div>
        </div>

    )
}