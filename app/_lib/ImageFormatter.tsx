import Image from "next/image";

export default function ImageFormatter({ props }) {
    return (
        <div className=" relative w-full apect-video">
            {props.type == "img" ?
                <Image
                    src={props.src}
                    alt={props.alt}
                    
                    priority
                    className="aspect-auto"
                    // sizes="(max-width: 768px) 100vw, 50vw"
                /> :
                <video
                    src={props.src}
                    poster={props.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                    className="pointer-events-none h-full w-full object-cover aspect-auto"
                />
            }
        </div>
    );

}