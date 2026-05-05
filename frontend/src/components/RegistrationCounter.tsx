import { useState } from 'react';

interface RegistrationCounterProps {
  initialCapacity: number;
}

export const RegistrationCounter = ({ initialCapacity }: RegistrationCounterProps) => {
  const [spotsLeft, setSpotsLeft] = useState<number>(initialCapacity);

  const handleRegister = () => {
    if (spotsLeft > 0) {
      setSpotsLeft(spotsLeft - 1);
    }
  };

  return (
    <>
      <div className="spots-text">
        Sisa Kuota: <strong>{spotsLeft}</strong>
      </div>
      <button 
        className="btn-register"
        onClick={handleRegister}
        disabled={spotsLeft === 0}
      >
        {spotsLeft === 0 ? 'Penuh' : 'Daftar Sekarang'}
      </button>
    </>
  );
};
