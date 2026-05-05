import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "danger" | "success";
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
    variant = "primary", 
    fullWidth = false, 
    children, 
    className, 
    ...props 
}) => {
    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-200",
        danger: "bg-red-600 hover:bg-red-700 focus:ring-red-200",
        success: "bg-green-600 hover:bg-green-700 focus:ring-green-200",
    };

    return (
        <button
            className={`
                ${variantClasses[variant]} 
                text-white font-bold py-2 px-6 rounded transition-all 
                uppercase tracking-wider shadow-md active:scale-95 
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-4
                ${fullWidth ? "w-full" : "w-fit"}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
