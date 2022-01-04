import { MouseEvent, useEffect, useState } from 'react';
import { getRandomSelection } from '../helpers/getRandomSelection';
import { GameContext } from './GameContext';

type GameProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const GameProvider = ({ children }: GameProviderProps) => {
  const [selection, setSelection] = useState('');
  const [CPUSelection, setCPUSelection] = useState('');

  const handleSelection = (e: MouseEvent<HTMLButtonElement>) => {
    setSelection(e.currentTarget.id);
  };

  useEffect(() => {
    if (selection !== '') {
      getRandomSelection().then(setCPUSelection);
    }
  }, [selection]);

  return (
    <GameContext.Provider
      value={{
        selection,
        CPUSelection,
        handleSelection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
