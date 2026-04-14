import { useState, useMemo } from 'react';

const modules = import.meta.glob('./pertemuan-*/*.tsx', { eager: true });

function App() {
  const meetings = useMemo(() => {
    const list = Object.entries(modules).map(([path, module]: [string, any]) => {
      const folderMatch = path.match(/pertemuan-(\d+)/);
      const meetingId = folderMatch ? parseInt(folderMatch[1]) : 0;
      
      const fileNameMatch = path.match(/\/([^/]+)\.tsx$/);
      const fileName = fileNameMatch ? fileNameMatch[1] : `Materi ${meetingId}`;
      
      return {
        id: meetingId,
        name: fileName,
        Component: module.default,
        key: `${meetingId}-${fileName}`,
      };
    });
    
    return list.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name));
  }, []);

  const [activeKey, setActiveKey] = useState<string>(() => {
    return meetings.length > 0 ? meetings[0].key : "";
  });

  const CurrentPage = meetings.find(m => m.key === activeKey)?.Component;

  return (
    <div className="relative min-h-screen">
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] flex gap-1 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-xl border border-slate-200 overflow-x-auto max-w-[95vw] sm:max-w-fit no-scrollbar">
        {meetings.length === 0 ? (
          <span className="px-3 py-1 text-xs text-slate-400">Belum ada folder...</span>
        ) : (
          meetings.map((meeting) => (
            <button 
              key={meeting.key}
              onClick={() => setActiveKey(meeting.key)}
              className={`px-4 py-1.5 rounded-full font-bold whitespace-nowrap transition-all duration-300 text-xs sm:text-sm ${
                activeKey === meeting.key 
                  ? 'bg-slate-900 text-white shadow-md scale-105' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              P{meeting.id} - {meeting.name}
            </button>
          ))
        )}
      </div>

      <main className="animate-in fade-in duration-500 pb-24">
        {CurrentPage ? (
          <CurrentPage />
        ) : (
          <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-400">Pilih Pertemuan di Bawah</h2>
              <p className="text-slate-400">Pastikan folder pertemuan-* sudah memiliki file .tsx</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
