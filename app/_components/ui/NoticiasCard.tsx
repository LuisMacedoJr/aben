import Image from "next/image"
import Clock from "./Clock"

export default function NoticiasCard ({props}) {

    return (
        <div className="relative h-52 max-w-[340px] flex flex-col rounded-lg shadow-md overflow-hidden">
            <Image
                src={props.img}
                alt=""
                className="aspect-auto"

            />
            <div className="p-3 bg-[var(--faded-white)] grow overflow-hidden">
                <h2>{props.text}</h2>
            </div>
            
                <Clock props={props} className="self-end bottom-0"/>

        </div>
    )

}