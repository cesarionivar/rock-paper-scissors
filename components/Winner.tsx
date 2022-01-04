import { useEffect, useState } from 'react';
import { getWinner } from '../helpers/getWinner';

interface WinnerProps {
  user: string;
  CPU: string;
}

export const Winner = ({ user, CPU }: WinnerProps) => {
  const [winner, setWinner] = useState('');

  useEffect(() => {
    const defeater: string = getWinner(user, CPU);
    setWinner(defeater);
  }, [user, CPU]);

  return (
    <>
      {winner === 'tie' ? (
        <p className='text-3xl'>
          🤝 <span className='font-bold text-yellow-200'>It's a tie</span> 😋
        </p>
      ) : winner === 'user' ? (
        <p className='text-3xl'>
          🚀 <span className='font-bold text-emerald-400'>You Win</span> 🎉
        </p>
      ) : (
        <p className='text-3xl'>
          💔 <span className='font-bold text-red-400'>You lose</span> 🥲
        </p>
      )}
    </>
  );
};
