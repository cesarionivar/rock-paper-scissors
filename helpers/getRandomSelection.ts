interface OptionsIndexable {
  [key: number]: string;
}

export const getRandomSelection = async (): Promise<string> => {
  return new Promise((resolve) => {
    const option = Math.ceil(Math.random() * 3);

    const options: OptionsIndexable = {
      1: 'paper',
      2: 'scissors',
      3: 'rock',
    };

    const picked: string = options[option];
    resolve(picked);
  });
};
