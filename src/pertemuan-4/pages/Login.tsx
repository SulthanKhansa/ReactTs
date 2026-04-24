interface LoginProps {
  onToggle: () => void;
}

export default function Login({ onToggle }: LoginProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
        <p className="text-gray-500 text-sm">Masuk ke akun Invofest Anda</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Login Berhasil!'); }}>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#1e1b4b] outline-none transition-all"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#1e1b4b] outline-none transition-all"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-[#1e1b4b] text-white py-2 rounded font-semibold hover:bg-[#2e2b6b] transition-colors"
        >
          Masuk
        </button>
      </form>

      <div className="text-center pt-2">
        <p className="text-sm text-gray-600">
          Belum punya akun?{' '}
          <button onClick={onToggle} className="text-[#1e1b4b] font-semibold hover:underline">
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
}
