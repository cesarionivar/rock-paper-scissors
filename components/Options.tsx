export const Options = () => {
  return (
    <div className='grid place-items-center justify-center mt-16 gap-6'>
      <div className='flex gap-6'>
        <button className='flex justify-center items-center w-32 h-32 rounded-full bg-white hover:bg-gray-300  border-8 border-blue-600'>
          <img src='/icon-paper.svg' alt='Paper' />
        </button>
        <button className='flex justify-center items-center w-32 h-32 rounded-full bg-white hover:bg-gray-300  text-black border-8 border-yellow-600'>
          <img src='/icon-scissors.svg' alt='Scissors' />
        </button>
      </div>
      <button className='flex justify-center items-center w-32 h-32 rounded-full bg-white hover:bg-gray-300  border-8 border-red-600'>
        <img src='/icon-rock.svg' alt='Rock' />
      </button>
    </div>
  );
};
