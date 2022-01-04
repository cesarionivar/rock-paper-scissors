import Image from 'next/image';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export const Options = () => {
  const { handleSelection } = useContext(GameContext);

  return (
    <div className='grid place-items-center justify-center mt-16 gap-6'>
      <div className='flex gap-6'>
        <button
          id='paper'
          onClick={handleSelection}
          className='flex justify-center items-center w-32 h-32 rounded-full bg-white hover:bg-gray-300  border-8 
          border-blue-600'
        >
          <Image width={60} height={60} src='/icon-paper.svg' alt='Paper' />
        </button>
        <button
          id='scissors'
          onClick={handleSelection}
          className='flex justify-center items-center w-32 h-32 rounded-full bg-white hover:bg-gray-300  
          text-black border-8 
          border-yellow-600'
        >
          <Image
            width={60}
            height={60}
            src='/icon-scissors.svg'
            alt='Scissors'
          />
        </button>
      </div>
      <button
        id='rock'
        onClick={handleSelection}
        className='flex justify-center items-center w-32 h-32 rounded-full bg-white hover:bg-gray-300  border-8 
        border-red-600'
      >
        <Image width={60} height={60} src='/icon-rock.svg' alt='Rock' />
      </button>
    </div>
  );
};
