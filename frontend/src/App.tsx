import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuthStore } from './store/useAuthStore';

const modules = import.meta.glob('./pertemuan-*/*.tsx', { eager: true });

function App() {
  const { isAuthenticated } = useAuthStore();
  const meetings = useMemo(() => {
    const list = Object.entries(modules).map(([path, module]: [string, any]) => {
      const folderMatch = path.match(/pertemuan-([\d&]+)/);
      const rawId = folderMatch ? folderMatch[1] : "0";
      
      const fileNameMatch = path.match(/\/([^/]+)\.tsx$/);
      let fileName = fileNameMatch ? fileNameMatch[1] : `Materi ${rawId}`;
      
      // Mapping logic based on user request
      let displayName = fileName;
      let sortOrder = 0;

      if (path.includes('pertemuan-1')) {
        sortOrder = 1;
        displayName = "Materi (P1)";
      } else if (path.includes('pertemuan-2')) {
        sortOrder = 2;
        displayName = "Materi & Tugas (P2)";
      } else if (path.includes('Materi-P3')) {
        sortOrder = 3;
        displayName = "Materi (P3)";
      } else if (path.includes('Tugas-P3')) {
        sortOrder = 4;
        displayName = "Tugas (P3)";
      } else if (path.includes('Materi-P4')) {
        sortOrder = 5;
        displayName = "Materi (P4)";
      } else if (path.includes('Tugas-P4')) {
        sortOrder = 6;
        displayName = "Tugas (P4)";
      } else if (path.includes('pertemuan-5-6') || path.includes('pertemuan-5')) {
        sortOrder = 7;
        displayName = "Materi & Tugas (P5 & P6)";
      }

      return {
        id: rawId,
        sortOrder,
        name: displayName,
        Component: module.default,
        key: `${rawId}-${fileName}`,
      };
    });
    
    return list.sort((a, b) => a.sortOrder - b.sortOrder);
  }, []);

  const [activeKey, setActiveKey] = useState<string>(() => {
    return meetings.length > 0 ? meetings[0].key : "";
  });

  // Carousel Logic
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const slideStep = 1;
  const itemWidth = 240; // Increased to prevent text cutoff

  // Auto-scroll carousel to show active item
  useEffect(() => {
    const activeIndex = meetings.findIndex(m => m.key === activeKey);
    if (activeIndex !== -1) {
      if (activeIndex < startIndex) {
        setStartIndex(activeIndex);
      } else if (activeIndex >= startIndex + visibleCount) {
        setStartIndex(Math.max(0, activeIndex - visibleCount + 1));
      }
    }
  }, [activeKey, meetings, visibleCount]); 

  const next = () => {
    setStartIndex(prev => {
      const nextIndex = prev + slideStep;
      if (nextIndex + visibleCount > meetings.length) {
        return Math.max(0, meetings.length - visibleCount);
      }
      return nextIndex;
    });
  };

  const prev = () => {
    setStartIndex(prev => Math.max(0, prev - slideStep));
  };

  const CurrentPage = meetings.find(m => m.key === activeKey)?.Component;

  return (
    <div className="relative min-h-screen font-sans">
      {/* Floating Carousel Navigation */}
      {!isAuthenticated && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-2xl border border-slate-200">
          <button 
            onClick={prev}
            disabled={startIndex === 0}
            className={`p-2 rounded-full transition-all duration-300 ${startIndex === 0 ? 'text-slate-200 opacity-50' : 'text-slate-800 hover:bg-slate-100 active:scale-90'}`}
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </button>

          <div 
            className="overflow-hidden transition-all duration-500" 
            style={{ width: `${itemWidth * Math.min(meetings.length || 1, visibleCount)}px` }}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${startIndex * itemWidth}px)` }}
            >
              {meetings.length === 0 ? (
                <div className="px-6 py-2 text-xs text-slate-400 w-full text-center">Belum ada folder...</div>
              ) : (
                meetings.map((meeting) => (
                  <div key={meeting.key} style={{ width: `${itemWidth}px` }} className="flex-shrink-0 px-1">
                    <button 
                      onClick={() => setActiveKey(meeting.key)}
                      className={`w-full px-3 py-2.5 rounded-full font-black whitespace-nowrap transition-all duration-300 text-[10px] sm:text-xs uppercase tracking-tight border-2 ${
                        activeKey === meeting.key 
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                          : 'text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-800'
                      }`}
                    >
                      {meeting.sortOrder} - {meeting.name}
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <button 
            onClick={next}
            disabled={startIndex + visibleCount >= meetings.length}
            className={`p-2 rounded-full transition-all duration-300 ${startIndex + visibleCount >= meetings.length ? 'text-slate-200 opacity-50' : 'text-slate-800 hover:bg-slate-100 active:scale-90'}`}
          >
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>
      )}

      <main className="animate-in fade-in duration-500 pb-24">
        {CurrentPage ? (
          <CurrentPage
            onNavigate={(name: string) => {
              const target = meetings.find(m => 
                m.name.toLowerCase() === name.toLowerCase() ||
                m.id.toString() === name
              );
              if (target) setActiveKey(target.key);
            }}
          />
        ) : (
          <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center p-10">
              <div className="w-16 h-16 bg-slate-200 rounded-2xl mx-auto mb-6 animate-pulse"></div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Pilih Pertemuan</h2>
              <p className="text-slate-400 text-sm mt-2 font-medium">Silakan pilih menu navigasi di bawah untuk melihat konten.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
