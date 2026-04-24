interface RegisterProps {
  onToggle: () => void;
}

export default function Register({ onToggle }: RegisterProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-4xl font-bold text-[#1e1b4b] mb-2 font-display">Daftar Akun</h1>
        <p className="text-gray-500">Mulai perjalanan digital Anda bersama kami</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Pendaftaran Berhasil!'); onToggle(); }}>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
          <input 
            type="text" 
            placeholder="Masukkan nama lengkap"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e1b4b] focus:ring-1 focus:ring-[#1e1b4b] outline-none transition-all"
            required
          />
        </div>

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
            placeholder="Minimal 8 karakter"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e1b4b] focus:ring-1 focus:ring-[#1e1b4b] outline-none transition-all"
            required
          />
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1 rounded text-[#1e1b4b] focus:ring-[#1e1b4b]" required />
          <span className="text-xs text-gray-600 leading-relaxed">
            Saya menyetujui semua Syarat & Ketentuan serta Kebijakan Privasi yang berlaku di Invofest 2025.
          </span>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#1e1b4b] text-white font-bold py-4 rounded-xl hover:bg-[#2e2b6b] transform transition-active hover:scale-[1.02] active:scale-95 duration-200 shadow-lg shadow-indigo-200"
        >
          DAFTAR SEKARANG
        </button>
      </form>

      <div className="text-center">
        <p className="text-gray-600">
          Sudah punya akun?{' '}
          <button onClick={onToggle} className="text-[#1e1b4b] font-bold hover:underline">
            Masuk Sekarang
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
