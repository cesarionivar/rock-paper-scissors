import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { OptionSelected } from './OptionSelected';

export const Selections = () => {
  const { selection, CPUSelection, handleSelection } = useContext(GameContext);

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 mt-10 md:gap-32 md:mt-20 md:flex-row'>
        <div className='flex flex-col items-center gap-6'>
          <h2 className='text-3xl font-bold'>You picked</h2>
          <OptionSelected selection={selection} />
        </div>
        <div className='flex flex-col items-center gap-6'>
          <h2 className='text-3xl font-bold'>The CPU picked</h2>
          <OptionSelected selection={CPUSelection} />
        </div>
      </div>
      <div className='grid place-items-center mt-12'>
        {selection === CPUSelection ? (
          <p>Not one wins, it's a tie</p>
        ) : (
          <p>Need to verify who wins</p>
        )}
      </div>
      <div className='grid place-items-center mt-14'>
        <button
          onClick={handleSelection}
          className='bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-700'
        >
          Play Again
        </button>
      </div>
    </>
  );
};
