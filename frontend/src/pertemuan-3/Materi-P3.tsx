import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";

type FormData = {
    username: string;
    password: string;
};

const schema = z.object({
    username: z.string().min(1, "Username harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = () => {
        alert("Login Berhasil!");
    };

    return (
        <div className="p-8 max-w-xl">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    id="username"
                    label="Username"
                    type="text"
                    placeholder="Masukkan username"
                    error={errors.username?.message}
                    {...register("username")}
                />

                <InputPassword
                    id="password"
                    label="Password"
                    placeholder="Masukkan password"
                    error={errors.password?.message}
                    {...register("password")}
                />

                <div className="flex justify-start pt-4">
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded transition-colors uppercase tracking-wider"
                    >
                        Masuk
                    </button>
                </div>
            </form>
        </div>
    );
}
