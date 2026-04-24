import { useState } from 'react';
import MainLayout from './layout/MainLayout';
import Beranda from './pages/Beranda';
import Competition from './pages/Competition';
import Seminar from './pages/Seminar';
import Workshop from './pages/Workshop';
import Talkshow from './pages/Talkshow';
import P4Materi from './Materi'; // Reusing Auth logic for 'profile' view

export default function P4Tugas() {
  const [activePage, setActivePage] = useState<string>('beranda');

  const renderContent = () => {
    switch (activePage) {
      case 'beranda':
        return <Beranda />;
      case 'competition':
        return <Competition />;
      case 'seminar':
        return <Seminar />;
      case 'workshop':
        return <Workshop />;
      case 'talkshow':
        return <Talkshow />;
      case 'profile':
        return <P4Materi />;
      default:
        return <Beranda />;
    }
  };

  return (
    <MainLayout activePage={activePage} onPageChange={(page) => setActivePage(page)}>
      {renderContent()}
    </MainLayout>
  );
}
