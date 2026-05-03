import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import ProtectedRoute from '../route/ProtectedRoute';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Schemas
const categorySchema = z.object({
  title: z.string().min(1, "Judul kategori harus diisi"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  imageUrl: z.string().url("URL gambar tidak valid").or(z.literal("")),
});

const eventSchema = z.object({
  name: z.string().min(1, "Nama event harus diisi"),
  date: z.string().min(1, "Tanggal harus diisi"),
  location: z.string().min(1, "Lokasi harus diisi"),
  description: z.string().min(1, "Deskripsi harus diisi"),
});

const speakerSchema = z.object({
  name: z.string().min(1, "Nama pembicara harus diisi"),
  topic: z.string().min(1, "Topik harus diisi"),
  job: z.string().min(1, "Pekerjaan harus diisi"),
});

type CategoryForm = z.infer<typeof categorySchema>;
type EventForm = z.infer<typeof eventSchema>;
type SpeakerForm = z.infer<typeof speakerSchema>;

export default function P5Dashboard({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'kategori' | 'event' | 'pembicara'>('dashboard');
  const [isAdding, setIsAdding] = useState(false);
  const { user, logout } = useAuthStore();

  // Category Form
  const catForm = useForm<CategoryForm>({ resolver: zodResolver(categorySchema) });
  const onAddCategory = (data: CategoryForm) => {
    console.log("Adding Category:", data);
    alert("Kategori Berhasil Ditambahkan!");
    setIsAdding(false);
    catForm.reset();
  };

  // Event Form
  const eventForm = useForm<EventForm>({ resolver: zodResolver(eventSchema) });
  const onAddEvent = (data: EventForm) => {
    console.log("Adding Event:", data);
    alert("Event Berhasil Ditambahkan!");
    setIsAdding(false);
    eventForm.reset();
  };

  // Speaker Form
  const speakerForm = useForm<SpeakerForm>({ resolver: zodResolver(speakerSchema) });
  const onAddSpeaker = (data: SpeakerForm) => {
    console.log("Adding Speaker:", data);
    alert("Pembicara Berhasil Ditambahkan!");
    setIsAdding(false);
    speakerForm.reset();
  };

  const categories = [
    {
      id: 1,
      title: 'Poster Design Competition',
      description: 'Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif.',
      imageUrl: '/assets/competition/web_design.jpg',
    },
    {
      id: 2,
      title: 'UI/UX Design Competition',
      description: 'UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital.',
      imageUrl: '/assets/competition/ui_ux.jpg',
    },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'kategori', label: 'Kategori Event' },
    { id: 'event', label: 'Event' },
    { id: 'pembicara', label: 'Pembicara' },
  ];

  const renderContent = () => {
    if (isAdding) {
      return (
        <div className="max-w-2xl bg-white p-8 rounded-3xl shadow-xl animate-in zoom-in duration-300">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Tambah {activeTab === 'kategori' ? 'Kategori' : activeTab === 'event' ? 'Event' : 'Pembicara'}</h2>
            <button onClick={() => setIsAdding(false)} className="text-gray-400 hover:text-gray-600">Batal</button>
          </div>

          {activeTab === 'kategori' && (
            <form onSubmit={catForm.handleSubmit(onAddCategory)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Judul Kategori</label>
                <input {...catForm.register("title")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#B45309]" />
                {catForm.formState.errors.title && <p className="text-red-500 text-xs">{catForm.formState.errors.title.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Deskripsi</label>
                <textarea {...catForm.register("description")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#B45309] h-32" />
                {catForm.formState.errors.description && <p className="text-red-500 text-xs">{catForm.formState.errors.description.message}</p>}
              </div>
              <button type="submit" className="w-full bg-[#B45309] text-white py-3 rounded-xl font-bold">Simpan Kategori</button>
            </form>
          )}

          {activeTab === 'event' && (
            <form onSubmit={eventForm.handleSubmit(onAddEvent)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Nama Event</label>
                <input {...eventForm.register("name")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#B45309]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Tanggal</label>
                  <input type="date" {...eventForm.register("date")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#B45309]" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Lokasi</label>
                  <input {...eventForm.register("location")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#B45309]" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#B45309] text-white py-3 rounded-xl font-bold">Simpan Event</button>
            </form>
          )}

          {activeTab === 'pembicara' && (
            <form onSubmit={speakerForm.handleSubmit(onAddSpeaker)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
                <input {...speakerForm.register("name")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#B45309]" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Topik</label>
                <input {...speakerForm.register("topic")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#B45309]" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Pekerjaan/Instansi</label>
                <input {...speakerForm.register("job")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#B45309]" />
              </div>
              <button type="submit" className="w-full bg-[#B45309] text-white py-3 rounded-xl font-bold">Simpan Pembicara</button>
            </form>
          )}
        </div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Dashboard</h1>
            <p className="text-gray-500 text-xl font-medium">
              Selamat datang di dashboard Anda, <span className="text-[#B45309] font-bold">{user}</span>.
            </p>
          </div>
        );
      case 'kategori':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Kategori Event</h1>
              <button onClick={() => setIsAdding(true)} className="bg-[#B45309] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Tambah Kategori</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <div className="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                    <img src={cat.imageUrl} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{cat.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mt-1">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'event':
      case 'pembicara':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">{activeTab}</h1>
              <button onClick={() => setIsAdding(true)} className="bg-[#B45309] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Tambah {activeTab}</button>
            </div>
            <div className="bg-white p-12 rounded-3xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-400 font-medium">Belum ada data {activeTab}. Klik tombol di atas untuk menambah.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <ProtectedRoute onNavigate={onNavigate}>
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        <aside className="w-64 bg-[#B45309] flex flex-col shadow-2xl z-10">
          <div className="p-8">
            <h1 className="text-white text-3xl font-black tracking-tighter italic">Invofest</h1>
          </div>

          <nav className="flex-1 mt-4 px-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id as any); setIsAdding(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === item.id ? 'bg-white text-[#B45309] shadow-lg' : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <button onClick={() => { logout(); alert('Logout Berhasil!'); }} className="w-full bg-red-600 text-white py-3 rounded-xl font-black shadow-lg hover:bg-red-700 transition-colors uppercase text-sm tracking-widest">Logout</button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-10 lg:p-16">
          {renderContent()}
        </main>
      </div>
    </ProtectedRoute>
  );
}