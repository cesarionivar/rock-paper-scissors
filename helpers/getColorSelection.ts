export const getColorSelection = (selection: string): string => {
  switch (selection) {
    case 'rock':
      return 'red';

    case 'paper':
      return 'blue';

    case 'scissors':
      return 'yellow';

    default:
      return '';
  }
};
