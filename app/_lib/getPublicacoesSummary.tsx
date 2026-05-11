import { promises as fs } from 'fs';
import path from 'path';
import Image, {StaticImageData} from 'next/image';


export interface PublicacaoSummary {
    id: number;
    imgURL: string;
    img: StaticImageData;
    text: string;
    date: string;
}

export default async function getPublicacoesSummary(): Promise<PublicacaoSummary[]> {
    const filePath = path.join(process.cwd(), '/app/_assets/publicacoes/publicacoes.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const fullData = JSON.parse(fileContent);

    return fullData.map((u: PublicacaoSummary) => ({
        id: u.id,
        imgURL: u.imgURL,
        text: u.text,
        date: u.date
    }));

}