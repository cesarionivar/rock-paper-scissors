import { getColorSelection } from '../helpers/getColorSelection';

type OptionSelectedProps = {
  selection: string;
};

export const OptionSelected = ({ selection }: OptionSelectedProps) => {
  const color = getColorSelection(selection);

  return (
    <button
      className={`flex justify-center items-center w-32 h-32 rounded-full bg-white cursor-default  border-8 
    border-${color}-600`}
    >
      <img src={`/icon-${selection}.svg`} alt={`${selection}`} />
    </button>
  );
};
