import Image from 'next/image';

export const Score = () => {
  return (
    <div className='flex relative left-1/2 -translate-x-1/2 w-fit items-center border rounded space-x-28 sm:space-x-64 p-3'>
      <div>
        <Image width={80} height={60} src='/logo.svg' alt='Logo' />
      </div>
      <div className='flex flex-col items-center bg-white text-black font-bold px-3 py-1 rounded'>
        <p className='text-3xl'>{45}</p>
        <p className='text-xl text-rose-500'>Score</p>
      </div>
    </div>
  );
};
