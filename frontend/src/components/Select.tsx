import React from "react";

interface Option {
    value: string;
    label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: Option[];
    error?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, error, ...props }) => {
    return (
        <div className="flex flex-row items-center gap-4 w-full text-slate-700">
            <label htmlFor={props.id || label} className="font-medium w-24 shrink-0">
                {label}
            </label>
            <div className="flex-1">
                <select
                    className={`border border-black p-2 rounded w-full focus:outline-none focus:ring-2 bg-white ${
                        error ? "focus:ring-red-200 border-red-500" : "border-black focus:ring-blue-200"
                    }`}
                    {...props}
                >
                    <option value="" disabled>Pilih {label}</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
            </div>
        </div>
    );
};

export default Select;
