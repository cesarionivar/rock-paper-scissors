export const Score = () => {
  return (
    <div className='flex relative left-1/2 -translate-x-1/2 w-fit items-center border rounded space-x-32 sm:space-x-64 p-3'>
      <div>
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-3xl'>{45}</p>
        <p className='text-xl text-rose-400'>Score</p>
      </div>
    </div>
  );
};
