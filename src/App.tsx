import React from 'react';
import { Home, Trophy, User, LaptopMinimal, Mic, Code2, Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px', fontFamily: 'Outfit, sans-serif' }}>
              INVOFEST 2025
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#" className="nav-item"><Home size={18} /> Beranda</a></li>
            <li><a href="#" className="nav-item"><Trophy size={18} /> Competition</a></li>
            <li><a href="#" className="nav-item"><User size={18} /> Seminar</a></li>
            <li><a href="#" className="nav-item active"><LaptopMinimal size={18} /> Workshop</a></li>
            <li><a href="#" className="nav-item"><Mic size={18} /> Talkshow</a></li>
          </ul>
          <div className="profile">
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
              <User size={20} />
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>IT Workshop</h1>
            <h2>"AI for a Sustainable Future: The Role of Z Generation in the Digital Era"</h2>
            <p>IT Workshop bertujuan untuk membekali Generasi Z dengan keterampilan dan pengetahuan dalam memanfaatkan Kecerdasan Buatan (AI) guna menciptakan solusi inovatif yang mendukung keberlanjutan lingkungan hidup.</p>
            <button className="btn btn-primary">Daftar Sekarang</button>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1531297172867-4f4013622219?auto=format&fit=crop&q=80&w=800&h=800" alt="AI & Tech" style={{ width: '100%', borderRadius: '2rem', boxShadow: 'var(--shadow-lg)' }} />
          </motion.div>
        </div>
      </section>

      <section className="section bg-secondary" style={{ position: 'relative' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Tentang IT Workshop</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem' }}>
              Kegiatan ini memfokuskan pada pemanfaatan teknologi untuk mengubah ide inovatif menjadi solusi lingkungan. Melalui sesi ini, partisipan tidak hanya akan belajar tentang AI tetapi juga bagaimana alat ini dapat berdampak langsung pada inisiatif ramah lingkungan di masa depan.
            </p>
          </motion.div>
        </div>
        
        <div className="wave-bottom text-white">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,191.6,108.97c48.82-8.8,97-25.75,145-38.3C349.52,62.15,361.32,59.39,373.1,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 style={{ fontSize: '2.5rem' }}>Temui Pembicara Khusus Kami</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Pakar industri yang akan membagikan wawasan mereka</p>
          </motion.div>
          
          <div className="speaker-grid">
            {[
              {
                name: "Lhuqita Fazry",
                role: "Mobile Development",
                desc: "Developer, Founder Rumah Coding Indonesia"
              },
              {
                name: "M. Dendi Purwanto",
                role: "Artificial Intelligence",
                desc: "Software Engineer, PT. Mayar Kernel Supernova"
              },
              {
                name: "Danang Avan M",
                role: "Cyber Security",
                desc: "Security Analyst, Founder | Contributor TegalSec"
              }
            ].map((speaker, index) => (
              <motion.div 
                key={index} 
                className="card"
                style={{ textAlign: 'center' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } } }}
              >
                <img src={`https://i.pravatar.cc/300?img=${index + 11}`} alt={speaker.name} className="speaker-image" />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{speaker.name}</h3>
                <h4 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem', fontFamily: 'Inter' }}>{speaker.role}</h4>
                <p style={{ fontSize: '0.875rem' }}>{speaker.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 style={{ fontSize: '2.5rem' }}>Pelaksanaan IT Workshop</h2>
          </motion.div>

          <div className="execution-list">
            <motion.div 
              className="execution-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: 0.1 } } }}
            >
              <div className="icon-box"><Code2 size={28} /></div>
              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Topik Pembahasan</h4>
                <p style={{ color: 'var(--text-muted)' }}>Mobile Development, AI & Cyber Security</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="execution-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: 0.2 } } }}
            >
              <div className="icon-box"><Calendar size={28} /></div>
              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Tanggal</h4>
                <p style={{ color: 'var(--text-muted)' }}>Selasa, 25 November 2025</p>
              </div>
            </motion.div>

            <motion.div 
              className="execution-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: 0.3 } } }}
            >
              <div className="icon-box"><Clock size={28} /></div>
              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Waktu</h4>
                <p style={{ color: 'var(--text-muted)' }}>08.00 WIB - 16.30 WIB</p>
              </div>
            </motion.div>

            <motion.div 
              className="execution-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: 0.4 } } }}
            >
              <div className="icon-box"><MapPin size={28} /></div>
              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Lokasi</h4>
                <p style={{ color: 'var(--text-muted)' }}>Lab Kom D.1, Politeknik Harapan Bersama</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px', marginBottom: '1rem', fontFamily: 'Outfit' }}>INVOFEST 2025</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', maxWidth: '300px' }}>
                Festival Teknologi Informasi tahunan yang diselenggarakan oleh Politeknik Harapan Bersama Tegal.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Menu Utama</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)', listStyle: 'none' }}>
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Kegiatan</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)', listStyle: 'none' }}>
                <li><a href="#">Competition</a></li>
                <li><a href="#">Seminar</a></li>
                <li><a href="#">Workshop</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Lokasi Kami</h4>
              <div style={{ background: '#e5e7eb', height: '150px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Peta Kampus</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 INVOFEST. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
