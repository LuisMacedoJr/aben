import MoreButton from "../ui/MoreButton";
import PublicacoesTitulo from "@/app/_components/ui/PublicacoesTitulo";
import PublicacoesCard from "@/app/_components/ui/PublicacoesCard";

import publicacao1 from "@/app/_assets/publicacoes/publicacao1.png";
import publicacao2 from "@/app/_assets/publicacoes/publicacao2.png";


const PUBLICACOES = [
    {
        id: 1,
        img: publicacao1,
        text: "Programa de Pós-Graduação em Enfermagem Unisinos Mestrado Profissional: uma síntese dos 10 anos de produção",
        date: "2026-02-30T01:03:18.987"
    },
    {
        id: 2,
        img: publicacao2,
        text: "Reflexões sobre o escopo do trabalho da enfermeira na atenção primária à saúde",
        date: "2026-04-30T01:03:18.987"
    },
    {
        id: 3,
        img: publicacao2,
        text: "Programa de Pós-Graduação em Enfermagem Unisinos Mestrado Profissional: uma síntese dos 10 anos de produção",
        date: "2026-04-12T01:03:18.987"
    }
]

export default function Publicacoes() {
    return (
        <div className=" flex flex-col justify-center gap-6">
            <div className="grow flex flex-row items-center justify-between">
                <PublicacoesTitulo />
                <MoreButton />

            </div>
            {PUBLICACOES.map((publicacao) => (
                <PublicacoesCard key={publicacao.id} props={publicacao} />

            ))}

        </div>
    )
}