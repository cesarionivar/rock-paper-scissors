import type { NextPage } from 'next';
import Head from 'next/head';
import { Score } from '../components/Score';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rock Paper Scissors Game</title>
        <meta name='description' content='Rock Paper Scissors Game App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-screen w-screen bg-slate-800 text-white'>
        <section className='pt-6'>
          <Score />
        </section>
      </main>
    </div>
  );
};

export default Home;
