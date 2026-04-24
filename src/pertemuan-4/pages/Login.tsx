interface LoginProps {
  onToggle: () => void;
}

export default function Login({ onToggle }: LoginProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-4xl font-bold text-[#1e1b4b] mb-2 font-display">Selamat Datang</h1>
        <p className="text-gray-500">Silakan masuk untuk melanjutkan akses ke Invofest</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Login Berhasil!'); }}>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input 
            type="email" 
            placeholder="nama@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e1b4b] focus:ring-1 focus:ring-[#1e1b4b] outline-none transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e1b4b] focus:ring-1 focus:ring-[#1e1b4b] outline-none transition-all"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded text-[#1e1b4b] focus:ring-[#1e1b4b]" />
            <span className="text-sm text-gray-600">Ingat saya</span>
          </label>
          <a href="#" className="text-sm font-semibold text-[#1e1b4b] hover:underline">Lupa Password?</a>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#1e1b4b] text-white font-bold py-4 rounded-xl hover:bg-[#2e2b6b] transform transition-active hover:scale-[1.02] active:scale-95 duration-200 shadow-lg shadow-indigo-200"
        >
          MASUK
        </button>
      </form>

      <div className="text-center">
        <p className="text-gray-600">
          Belum punya akun?{' '}
          <button onClick={onToggle} className="text-[#1e1b4b] font-bold hover:underline">
            Daftar Sekarang
          </button>
        </p>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
