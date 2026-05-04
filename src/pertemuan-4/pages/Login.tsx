import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/useAuthStore";

interface LoginProps {
  onToggle: () => void;
  onNavigate?: (page: string) => void;
}

const loginSchema = z.object({
  username: z.string().min(1, "Username harus diisi"),
  password: z.string().min(8, "Minimal 8 Karakter"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login({ onToggle, onNavigate }: LoginProps) {
  const login = useAuthStore((state) => state.login);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    login(data.username);
    if (onNavigate) {
      onNavigate('Materi & Tugas-P5');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Login</h1>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-800 ml-1">Username</label>
          <input 
            {...register("username")}
            placeholder="Username"
            className={`w-full px-5 py-3 border-2 rounded-full outline-none transition-all ${
              errors.username ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#1e1b4b]"
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-lg ml-1">{errors.username.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-800 ml-1">Password</label>
          <input 
            {...register("password")}
            type="password" 
            placeholder="••••••••"
            className={`w-full px-5 py-3 border-2 rounded-full outline-none transition-all ${
              errors.password ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#1e1b4b]"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-lg ml-1">{errors.password.message}</p>
          )}
        </div>

        <button 
          type="submit"
          className="w-full bg-[#1e1b4b] text-white py-3 rounded-full font-bold text-lg hover:bg-[#2e2b6b] transition-all transform active:scale-95 shadow-lg"
        >
          Masuk
        </button>
      </form>

      <div className="text-center pt-2">
        <p className="text-gray-600">
          Belum punya akun?{' '}
          <button onClick={onToggle} className="text-[#1e1b4b] font-bold hover:underline">
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
}
