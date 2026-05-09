
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'previous' | 'next';
}

const CarouselButton = ({
    variant = 'previous',
    className = "",
    ...props
}: ButtonProps) => {
    const baseStyles = "flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50 active:scale-95";

    const variants = {
        previous: "<",
        next: ">"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="text-xl font-bold text-gray-600">
                {`${variants[variant]}`}
            </span>
        </button>
    );
};

export default CarouselButton;