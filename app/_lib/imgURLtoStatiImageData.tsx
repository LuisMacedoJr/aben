import { StaticImageData } from "next/image";


const stringToImageData = async (imageUrl: string): Promise<StaticImageData> => {
    // console.log(imageUrl);
    const image = await import(`@/app/_assets/${imageUrl}`);
    // console.log(image.default);
    return image.default;

}

export default stringToImageData;