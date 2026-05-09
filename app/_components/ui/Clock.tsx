import Image from "next/image";

import getElapsedTime from "@/app/_lib/getElapsedTime";

import clock from "@/public/clock.svg";

// const ElapsedTime = ()

export default async function Clock({ props }) {

    const response = await getElapsedTime({props});
    


    return (
        <div className=" absolute  rounded-tl-lg flex flex-row items-center  justify-center bg-[var(--violet)] text-[var(--white)] p-1 gap-1">
            <Image
                src={clock}
                alt="clock icon"
                className=""
            />
            <p className="block text-center shrink">
                {`${response}`}
            </p>
        </div>

    );

}