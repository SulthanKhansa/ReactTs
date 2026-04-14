import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
    return (
        <div className="flex flex-row items-center gap-4 w-full">
            <label htmlFor={props.id || label} className="font-medium text-slate-700 w-24 shrink-0">
                {label}
            </label>
            <div className="flex-1">
                <input
                    className={`border border-black p-2 rounded w-full focus:outline-none focus:ring-2 ${
                        error ? "focus:ring-red-200" : "focus:ring-blue-200"
                    }`}
                    {...props}
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        </div>
    );
};

export default Input;
