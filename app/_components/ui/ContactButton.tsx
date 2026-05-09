import Image from "next/image";

import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import phone from "@/public/phone.svg";
import mail from "@/public/mail.svg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'facebook' | 'instagram' | 'phone' | 'mail';
}

const ContactButton = ({
    variant = 'facebook',
    className = "",
    ...props
}: ButtonProps) => {
    const baseStyles = "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--faded-white)]";

    return (
        <button
            className={`${baseStyles} ${className}`}
            {...props}
        >
            {(() => {
                switch (variant) {
                    case 'facebook':
                        return <Image src={facebook} alt="facebook link" />
                    case 'instagram':
                        return <Image src={instagram} alt="instagram link" />
                    case 'phone':
                        return <Image src={phone} alt="phone number" />
                    case 'mail':
                        return <Image src={mail} alt="e-mail" />
                    default:
                        return null;
                }
            })()}
        </button>
    );
};

export default ContactButton;