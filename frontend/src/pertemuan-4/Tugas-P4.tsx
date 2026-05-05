import { useState, useEffect } from 'react';
import MainLayout from './layout/MainLayout';
import Beranda from './pages/Beranda-P4';
import Competition from './pages/Competition-P4';
import Seminar from './pages/Seminar-P4';
import Workshop from './pages/Workshop-P4';
import Talkshow from './pages/Talkshow-P4';
import P4Materi from './Materi-P4'; // Reusing Auth logic for 'profile' view

export default function P4Tugas({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [activePage, setActivePage] = useState<string>('workshop');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleInternalNav = (name: string) => {
    // Strip -P4 suffix and convert to lower for internal state
    const target = name.replace('-P4', '').toLowerCase();
    setActivePage(target);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'beranda':
        return <Beranda onNavigate={handleInternalNav} />;
      case 'competition':
        return <Competition onNavigate={handleInternalNav} />;
      case 'seminar':
        return <Seminar onNavigate={handleInternalNav} />;
      case 'workshop':
        return <Workshop onNavigate={handleInternalNav} />;
      case 'talkshow':
        return <Talkshow onNavigate={handleInternalNav} />;
      case 'profile':
        return <P4Materi onNavigate={onNavigate} />;
      default:
        return <Beranda onNavigate={handleInternalNav} />;
    }
  };

  return (
    <MainLayout activePage={activePage} onPageChange={(page) => setActivePage(page)}>
      {renderContent()}
    </MainLayout>
  );
}
