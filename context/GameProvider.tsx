import { MouseEvent, useState } from 'react';
import { GameContext } from './GameContext';

type GameProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const GameProvider = ({ children }: GameProviderProps) => {
  const [selection, setSelection] = useState('');

  const handleSelection = (e: MouseEvent<HTMLButtonElement>) => {
    setSelection(e.currentTarget.id);
  };

  return (
    <GameContext.Provider
      value={{
        selection,
        handleSelection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
