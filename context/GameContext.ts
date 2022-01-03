import { createContext, MouseEvent } from 'react';

interface GameContextProps {
  selection: string;
  handleSelection: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const GameContext = createContext({} as GameContextProps);
