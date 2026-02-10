type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'text';
    className?: string;
    onClick?: () => void;
};

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
    const baseStyles = "px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-all duration-300 ease-out";

    const variants = {
        primary: "bg-ivory text-obsidian hover:bg-champagne hover:text-item-black",
        outline: "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/5",
        text: "text-ivory border-b border-transparent hover:border-champagne hover:text-champagne p-0"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
