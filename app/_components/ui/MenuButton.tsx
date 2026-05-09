

import React from 'react';
import "@/app/globals.css";
import Image from "next/image";
import hamburger from "@/public/hamburger_icon.svg";

export default function MenuButton({props}) {


        return (
            <>
                <div className="flex flex-col overflow-visible">
                    <button onClick={props}>
                        <Image
                            src={hamburger}
                            alt="menu" />
                    </button>

                </div>

            </>

        );

}


// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     variant?: 'navMenu' | 'navItem';
// }

// const Button = ({
//     children,
//     variant = 'navItem', 'navItem',
//     className = "",
//     ...props
// }: ButtonProps) => {
//     const baseStyles = "";

//     const variants = {
//         navMenu: "",
//         navItem: ""
//     };

//     return (
//         <button
//             className={`${baseStyles} ${variants[variant]} ${className}`}
//             {...props}
//         >
//             {variant == "navMenu" ?
//                 (<Image
//                     src={hamburger}
//                     alt="menu"
//                 />) : null
//             }
//             {children}
//         </button>
//     );
// };

// export default Button;