import { promises as fs } from 'fs';
import path from 'path';
import Image, {StaticImageData} from 'next/image';


export interface NoticiaSummary {
    id: number;
    imgURL: string;
    img: StaticImageData;
    text: string;
    date: string;
}

export default async function getNoticiasSummary(): Promise<NoticiaSummary[]> {
    const filePath = path.join(process.cwd(), '/app/_assets/noticias/noticias.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const fullData = JSON.parse(fileContent);

    return fullData.map((u: NoticiaSummary) => ({
        id: u.id,
        imgURL: u.imgURL,
        text: u.text,
        date: u.date
    }));

}