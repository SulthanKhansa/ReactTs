import React, { useState } from "react";

interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({ label, error, ...props }) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div className="flex flex-row items-start gap-4 w-full">
            <label htmlFor={props.id || label} className="font-medium text-slate-700 w-24 shrink-0 mt-3">
                {label}
            </label>
            <div className="flex-1">
                <input
                    type={show ? "text" : "password"}
                    className={`border border-black p-2 rounded w-full focus:outline-none focus:ring-2 ${
                        error ? "focus:ring-red-200" : "focus:ring-blue-200"
                    }`}
                    {...props}
                />
                <div className="flex justify-end mt-1">
                    <button
                        type="button"
                        onClick={toggleShow}
                        className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase"
                    >
                        {show ? "Hide" : "Show"}
                    </button>
                </div>
                {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
            </div>
        </div>
    );
};

export default InputPassword;
