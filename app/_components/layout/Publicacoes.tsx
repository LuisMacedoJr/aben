import MoreButton from "../ui/MoreButton";
import PublicacoesTitulo from "@/app/_components/ui/PublicacoesTitulo";
import PublicacoesCard from "@/app/_components/ui/PublicacoesCard";
import getPublicacoesSummary from "@/app/_lib/getPublicacoesSummary";
import stringToImageData from "@/app/_lib/imgURLtoStatiImageData";

type PageName = 'home' | 'publicacoesPage';


interface PublicacoesProps extends React.ReactElement {
    variant?: PageName;
}

export default async function Publicacoes({
    variant = 'home' as PageName,
}): Promise<PublicacoesProps> {

    const PUBLICACOES = await getPublicacoesSummary();
    await Promise.all(
        PUBLICACOES.map(async (publicacao) => {
            publicacao.img = await stringToImageData(publicacao.imgURL);
        })
    );

    return (
        <div className=" flex flex-col justify-center gap-6">
            <div className="grow flex flex-row items-center justify-between">
                {(() => {
                    if (variant == 'home') {
                        return (<>
                            <PublicacoesTitulo />
                            <MoreButton />
                        </>
                        );
                    } else if (variant == 'publicacoesPage') {
                        return (<>
                            <PublicacoesTitulo />
                        </>

                        )
                    }
                })()}


            </div>
            <div className="flex flex-col items-center gap-6 lg:flex-row">
            {PUBLICACOES.map((publicacao) => (
                <PublicacoesCard variant={variant} key={publicacao.id} publicacao={publicacao} />

            ))}
            </div>

        </div>
    )
}