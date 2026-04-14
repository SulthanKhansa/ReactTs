import { RegistrationCounter } from './RegistrationCounter';

interface WorkshopCardProps {
  topic: string;
  title: string;
  speaker: string;
  date: string;
  time: string;
  location: string;
}

export const WorkshopCard = ({ 
  topic, 
  title, 
  speaker, 
  date, 
  time, 
  location 
}: WorkshopCardProps) => {
  const initials = speaker
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="workshop-card">
      <div className="card-header">
        <div className="topic">{topic}</div>
        <h3>{title}</h3>
      </div>
      
      <div className="speaker-info">
        <div className="speaker-avatar">{initials}</div>
        <div className="speaker-details">
          <p>Speaker</p>
          <strong>{speaker}</strong>
        </div>
      </div>

      <ul className="schedule-list">
        <li>
          <span>Tanggal</span>
          <span>{date}</span>
        </li>
        <li>
          <span>Waktu</span>
          <span>{time}</span>
        </li>
        <li>
          <span>Lokasi</span>
          <span>{location}</span>
        </li>
      </ul>

      {/* Komponen State */}
      <RegistrationCounter initialCapacity={50} />
    </div>
  );
};
