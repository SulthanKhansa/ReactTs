import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import ProtectedRoute from '../routes/ProtectedRoute';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Schemas
const categorySchema = z.object({
  title: z.string().min(1, "Judul kategori harus diisi"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  imageUrl: z.string().url("URL gambar tidak valid").optional().or(z.literal("")),
});

const eventSchema = z.object({
  name: z.string().min(1, "Nama event harus diisi"),
  date: z.string().min(1, "Tanggal harus diisi"),
  location: z.string().min(1, "Lokasi harus diisi"),
  description: z.string().min(5, "Deskripsi minimal 5 karakter"),
});

const speakerSchema = z.object({
  name: z.string().min(1, "Nama pembicara harus diisi"),
  topic: z.string().min(1, "Topik harus diisi"),
  job: z.string().min(1, "Pekerjaan harus diisi"),
});

type CategoryForm = z.infer<typeof categorySchema>;
type EventForm = z.infer<typeof eventSchema>;
type SpeakerForm = z.infer<typeof speakerSchema>;

export default function P5Dashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'kategori' | 'event' | 'pembicara'>('dashboard');
  const [isAdding, setIsAdding] = useState(false);
  const { logout } = useAuthStore();

  // Dynamic Data State
  const [categories, setCategories] = useState<any[]>([
    { 
      id: 1, 
      title: "Poster Design Competition", 
      description: "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif.",
      imageUrl: "/assets/competition/web_design.jpg"
    },
    { 
      id: 2, 
      title: "UI/UX Design Competition", 
      description: "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital.",
      imageUrl: "/assets/competition/ui_ux.jpg"
    },
    { 
      id: 3, 
      title: "Web Design Competition", 
      description: "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive.",
      imageUrl: "/assets/competition/software_dev.jpg"
    }
  ]);

  const [events, setEvents] = useState<any[]>([
    {
      id: 1,
      name: "Mobile Development",
      date: "2025-11-25",
      location: "Lab Kom D.1",
      description: "08.00 WIB - 16.30 WIB"
    },
    {
      id: 2,
      name: "Artificial Intelligence",
      date: "2025-11-25",
      location: "Lab Kom D.2",
      description: "08.00 WIB - 16.30 WIB"
    },
    {
      id: 3,
      name: "Cyber Security",
      date: "2025-11-26",
      location: "Lab Kom D.1",
      description: "08.00 WIB - 16.30 WIB"
    }
  ]);

  const [speakers, setSpeakers] = useState<any[]>([
    {
      id: 1,
      name: "Dery Agung Triyadi",
      topic: "Cloud Infrastructure Architect",
      job: "Amazon Web Services (AWS) Indonesia"
    },
    {
      id: 2,
      name: "Sowam Habibi",
      topic: "Customer Engineer, Data Management",
      job: "Google Cloud Indonesia"
    },
    {
      id: 3,
      name: "Lhuqita Fazry",
      topic: "Mobile Development",
      job: "Developer, Founder Rumah Coding Indonesia"
    },
    {
      id: 4,
      name: "M. Dendi Purwanto",
      topic: "Artificial Intelligence",
      job: "Software Engineer, PT. Mayar Kernel Supernova"
    },
    {
      id: 5,
      name: "Danang Avan M",
      topic: "Cyber Security",
      job: "Security Analyst, Founder | Contributor TegalSec"
    }
  ]);

  const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';

  // Fetch Data from Backend
  const fetchData = async () => {
    if (!API_URL) return; // Skip fetch if no API URL (like on Vercel production)
    
    try {
      const [catRes, eventRes, speakerRes] = await Promise.all([
        fetch(`${API_URL}/categories`),
        fetch(`${API_URL}/events`),
        fetch(`${API_URL}/speakers`)
      ]);

      if (!catRes.ok || !eventRes.ok || !speakerRes.ok) throw new Error("API not responding");

      const catData = await catRes.json();
      const eventData = await eventRes.json();
      const speakerData = await speakerRes.json();

      if (catData.length > 0) setCategories(catData.map((c: any) => ({
        id: c.id,
        title: c.name,
        description: c.description,
        imageUrl: c.imageUrl
      })));

      if (eventData.length > 0) setEvents(eventData.map((e: any) => ({
        id: e.id,
        name: e.nama,
        date: e.tanggal,
        location: e.lokasi,
        description: e.waktu
      })));

      if (speakerData.length > 0) setSpeakers(speakerData.map((s: any) => ({
        id: s.id,
        name: s.nama,
        topic: s.keahlian,
        job: s.biodata
      })));
    } catch (error) {
      console.warn("Backend not connected, using default data.", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Category Form
  const catForm = useForm<CategoryForm>({ resolver: zodResolver(categorySchema) });
  const onAddCategory = async (data: CategoryForm) => {
    // Optimistic Update for UI
    const newCat = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl || ""
    };
    setCategories(prev => [...prev, newCat]);
    setIsAdding(false);
    catForm.reset();

    try {
      if (API_URL) {
        await fetch(`${API_URL}/categories`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.title,
            description: data.description,
            imageUrl: data.imageUrl
          })
        });
        fetchData(); // Sync with backend if available
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  // Event Form
  const eventForm = useForm<EventForm>({ resolver: zodResolver(eventSchema) });
  const onAddEvent = async (data: EventForm) => {
    // Optimistic Update for UI
    const newEv = {
      id: Date.now(),
      name: data.name,
      date: data.date,
      location: data.location,
      description: data.description
    };
    setEvents(prev => [...prev, newEv]);
    setIsAdding(false);
    eventForm.reset();

    try {
      if (API_URL) {
        await fetch(`${API_URL}/events`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nama: data.name,
            tanggal: data.date,
            waktu: data.description,
            lokasi: data.location,
            deskripsi: ""
          })
        });
        fetchData();
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // Speaker Form
  const speakerForm = useForm<SpeakerForm>({ resolver: zodResolver(speakerSchema) });
  const onAddSpeaker = async (data: SpeakerForm) => {
    // Optimistic Update for UI
    const newSp = {
      id: Date.now(),
      name: data.name,
      topic: data.topic,
      job: data.job
    };
    setSpeakers(prev => [...prev, newSp]);
    setIsAdding(false);
    speakerForm.reset();

    try {
      if (API_URL) {
        await fetch(`${API_URL}/speakers`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nama: data.name,
            keahlian: data.topic,
            biodata: data.job
          })
        });
        fetchData();
      }
    } catch (error) {
      console.error("Error adding speaker:", error);
    }
  };

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
                <input {...catForm.register("title")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440]" />
                {catForm.formState.errors.title && <p className="text-red-500 text-xs">{catForm.formState.errors.title.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Deskripsi</label>
                <textarea {...catForm.register("description")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440] h-32" />
                {catForm.formState.errors.description && <p className="text-red-500 text-xs">{catForm.formState.errors.description.message}</p>}
              </div>
              <button type="submit" className="w-full bg-[#7B2440] text-white py-3 rounded-xl font-bold">Simpan Kategori</button>
            </form>
          )}

          {activeTab === 'event' && (
            <form onSubmit={eventForm.handleSubmit(onAddEvent)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Nama Event</label>
                <input {...eventForm.register("name")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440]" />
                {eventForm.formState.errors.name && <p className="text-red-500 text-xs">{eventForm.formState.errors.name.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Tanggal</label>
                  <input type="date" {...eventForm.register("date")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440]" />
                  {eventForm.formState.errors.date && <p className="text-red-500 text-xs">{eventForm.formState.errors.date.message}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Lokasi</label>
                  <input {...eventForm.register("location")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440]" />
                  {eventForm.formState.errors.location && <p className="text-red-500 text-xs">{eventForm.formState.errors.location.message}</p>}
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Deskripsi Event</label>
                <textarea {...eventForm.register("description")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440] h-24" />
                {eventForm.formState.errors.description && <p className="text-red-500 text-xs">{eventForm.formState.errors.description.message}</p>}
              </div>
              <button type="submit" className="w-full bg-[#7B2440] text-white py-3 rounded-xl font-bold">Simpan Event</button>
            </form>
          )}

          {activeTab === 'pembicara' && (
            <form onSubmit={speakerForm.handleSubmit(onAddSpeaker)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
                <input {...speakerForm.register("name")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440]" />
                {speakerForm.formState.errors.name && <p className="text-red-500 text-xs">{speakerForm.formState.errors.name.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Topik</label>
                <input {...speakerForm.register("topic")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440]" />
                {speakerForm.formState.errors.topic && <p className="text-red-500 text-xs">{speakerForm.formState.errors.topic.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Pekerjaan/Instansi</label>
                <input {...speakerForm.register("job")} className="w-full px-4 py-2 border rounded-xl outline-none focus:border-[#7B2440]" />
                {speakerForm.formState.errors.job && <p className="text-red-500 text-xs">{speakerForm.formState.errors.job.message}</p>}
              </div>
              <button type="submit" className="w-full bg-[#7B2440] text-white py-3 rounded-xl font-bold">Simpan Pembicara</button>
            </form>
          )}
        </div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Ringkasan Data</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-500">Total Kategori</p>
                <p className="text-4xl font-bold text-[#7B2440] mt-1">{categories.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-500">Total Event</p>
                <p className="text-4xl font-bold text-[#7B2440] mt-1">{events.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-500">Total Pembicara</p>
                <p className="text-4xl font-bold text-[#7B2440] mt-1">{speakers.length}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* Event Terbaru */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-6 bg-[#7B2440] rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900">Event Terbaru</h2>
                </div>
                <div className="space-y-6">
                  {events.slice(-3).reverse().map((ev) => (
                    <div key={ev.id} className="flex justify-between items-center group">
                      <div>
                        <h3 className="font-bold text-gray-800 group-hover:text-[#7B2440] transition-colors">{ev.name}</h3>
                        <p className="text-sm text-gray-400 mt-0.5">{ev.date}</p>
                      </div>
                      <span className="text-[10px] font-bold bg-rose-50 text-[#7B2440] px-3 py-1 rounded-full uppercase tracking-wider">
                        {ev.name.toLowerCase().includes('seminar') ? 'Seminar' : ev.name.toLowerCase().includes('workshop') ? 'Workshop' : 'Event'}
                      </span>
                    </div>
                  ))}
                  {events.length === 0 && <p className="text-gray-400 text-sm">Belum ada event.</p>}
                </div>
              </div>

              {/* Pembicara Terbaru */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-6 bg-[#7B2440] rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900">Pembicara Terbaru</h2>
                </div>
                <div className="space-y-6">
                  {speakers.slice(-3).reverse().map((sp) => (
                    <div key={sp.id} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-[#7B2440] font-bold text-sm group-hover:bg-[#7B2440] group-hover:text-white transition-all">
                        {sp.name[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{sp.name}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{sp.topic}</p>
                      </div>
                    </div>
                  ))}
                  {speakers.length === 0 && <p className="text-gray-400 text-sm">Belum ada pembicara.</p>}
                </div>
              </div>
            </div>
          </div>
        );
      case 'kategori':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Kategori Event</h1>
              <button onClick={() => setIsAdding(true)} className="bg-[#7B2440] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Tambah Kategori</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  {cat.imageUrl && (
                    <div className="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                      <img src={cat.imageUrl} className="w-full h-full object-cover" />
                    </div>
                  )}
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
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Event</h1>
              <button onClick={() => setIsAdding(true)} className="bg-[#7B2440] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Tambah Event</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((ev) => (
                <div key={ev.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{ev.name}</h3>
                    <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded-lg">{ev.date}</span>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{ev.description}</p>
                  <div className="flex items-center text-xs text-gray-400 gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {ev.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'pembicara':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Pembicara</h1>
              <button onClick={() => setIsAdding(true)} className="bg-[#7B2440] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Tambah Pembicara</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speakers.map((sp) => (
                <div key={sp.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center text-[#7B2440] font-bold text-2xl">
                    {sp.name[0]}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{sp.name}</h3>
                  <p className="text-[#7B2440] text-sm font-bold mt-1">{sp.topic}</p>
                  <p className="text-gray-400 text-xs mt-2">{sp.job}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <ProtectedRoute>
      <div className="fixed inset-0 flex bg-slate-50 overflow-hidden">
        <aside className="w-64 bg-[#7B2440] flex flex-col shadow-2xl z-10">
          <div className="p-8 text-center">
            <h1 className="text-white text-3xl font-black tracking-tighter italic">Invofest</h1>
          </div>

          <nav className="flex-1 mt-4 px-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id as any); setIsAdding(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === item.id ? 'bg-white text-[#7B2440] shadow-lg' : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <button onClick={() => { logout(); }} className="w-full bg-red-600 text-white py-3 rounded-xl font-black shadow-lg hover:bg-red-700 transition-colors uppercase text-sm tracking-widest">Logout</button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-10 lg:p-16">
          {renderContent()}
        </main>
      </div>
    </ProtectedRoute>
  );
}
