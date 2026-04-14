import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { useState } from "react";

const schema = z.object({
    fullName: z.string().min(3, "Nama lengkap minimal 3 karakter"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    gender: z.enum(["Laki-laki", "Perempuan"], {
        message: "Silakan pilih jenis kelamin",
    }),
    address: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Tugas() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = async () => {
        setIsLoading(true);
        
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        setIsLoading(false);
        alert("Registrasi Berhasil!");
        reset();
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 pb-24">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl border border-slate-200 animate-in fade-in zoom-in duration-500">
                <div className="mb-10 text-center sm:text-left">
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Form Registrasi</h1>
                    <p className="text-slate-500 mt-2 font-medium">Membangun Organism UI menggunakan Konsep Atomic Design.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <Input
                        label="Nama"
                        placeholder="Nama Lengkap"
                        error={errors.fullName?.message}
                        {...register("fullName")}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="nama@email.com"
                        error={errors.email?.message}
                        {...register("email")}
                    />

                    <InputPassword
                        label="Password"
                        placeholder="Minimal 8 karakter"
                        error={errors.password?.message}
                        {...register("password")}
                    />

                    <Select
                        label="Gender"
                        options={[
                            { value: "Laki-laki", label: "Laki-laki" },
                            { value: "Perempuan", label: "Perempuan" },
                        ]}
                        error={errors.gender?.message}
                        {...register("gender")}
                    />

                    <TextArea
                        label="Alamat"
                        placeholder="Alamat Lengkap Domisili"
                        error={errors.address?.message}
                        {...register("address")}
                    />

                    <div className="flex flex-col sm:flex-row justify-end gap-3 pt-8 border-t border-slate-100">
                        <Button 
                            type="button" 
                            variant="danger" 
                            onClick={() => reset()}
                            disabled={isLoading}
                        >
                            Reset Form
                        </Button>
                        <Button 
                            type="submit" 
                            variant="primary" 
                            disabled={isLoading}
                        >
                            {isLoading ? "Sedang Mengirim..." : "Konfirmasi Pendaftaran"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
