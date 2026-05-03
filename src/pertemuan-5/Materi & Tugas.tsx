import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

export default function P5Dashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'kategori' | 'event' | 'pembicara'>('dashboard');
  const { user, logout } = useAuthStore();

  const categories = [
    {
      id: 1,
      title: 'Poster Design Competition',
      description: 'Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.',
      imageUrl: '/assets/competition/web_design.jpg',
    },
    {
      id: 2,
      title: 'UI/UX Design Competition',
      description: 'UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.',
      imageUrl: '/assets/competition/ui_ux.jpg',
    },
    {
      id: 3,
      title: 'Web Design Competition',
      description: 'Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.',
      imageUrl: '/assets/competition/software_dev.jpg',
    },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'kategori', label: 'Kategori Event' },
    { id: 'event', label: 'Event' },
    { id: 'pembicara', label: 'Pembicara' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
            <p className="text-gray-600 text-lg">
              Selamat datang kembali, <span className="font-bold text-[#B45309]">{user || 'Admin'}</span>! 
              Senang melihat Anda lagi di dashboard Invofest.
            </p>
          </div>
        );
      case 'kategori':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Kategori Event</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="h-48 overflow-hidden">
                    <img src={cat.imageUrl} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'event':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Event</h1>
            <p className="text-gray-600 text-lg">Daftar event yang tersedia saat ini.</p>
          </div>
        );
      case 'pembicara':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Pembicara</h1>
            <p className="text-gray-600 text-lg">Daftar pembicara yang akan mengisi acara.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#B45309] flex flex-col shadow-2xl relative z-10">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-white text-3xl font-black tracking-tighter text-center">Invofest</h1>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all flex items-center gap-3 ${
                activeTab === item.id
                  ? 'bg-white/20 text-white shadow-inner scale-[1.02]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <button
            onClick={() => {
              logout();
              alert('Logout Berhasil!');
            }}
            className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg active:scale-95 flex items-center justify-center"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-12">
        {renderContent()}
      </main>
    </div>
  );
}