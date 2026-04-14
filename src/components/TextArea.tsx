import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, error, ...props }) => {
    return (
        <div className="flex flex-row items-start gap-4 w-full text-slate-700">
            <label htmlFor={props.id || label} className="font-medium w-24 shrink-0 mt-2">
                {label}
            </label>
            <div className="flex-1">
                <textarea
                    className={`border border-black p-2 rounded w-full focus:outline-none focus:ring-2 bg-white min-h-[100px] ${
                        error ? "focus:ring-red-200 border-red-500" : "border-black focus:ring-blue-200"
                    }`}
                    {...props}
                />
                {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
            </div>
        </div>
    );
};

export default TextArea;
