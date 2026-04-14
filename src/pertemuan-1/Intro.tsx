export default function Intro() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800 p-8">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-8 pb-2 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
          Pengenalan
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          TypeScript adalah superset dari JavaScript yang menambahkan fitur Static Typing untuk mendeteksi kesalahan sejak awal dan mencegah aplikasi crash akibat kesalahan logika tipe data. Dengan menggunakan TypeScript, pengembang dapat menghindari masalah klasik seperti Silent Error melalui kontrak data yang jelas menggunakan Interface, serta mengelola konfigurasi proyek secara disiplin melalui tsconfig.json untuk memastikan kode tetap aman, fleksibel, dan mudah dikolaborasikan dalam tim.
        </p>
      </div>
    </div>
  );
}
