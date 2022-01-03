import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { Options } from '../components/Options';
import { Score } from '../components/Score';
import { GameContext } from '../context/GameContext';

const Home: NextPage = () => {
  const { selection } = useContext(GameContext);

  return (
    <div>
      <Head>
        <title>Rock Paper Scissors Game</title>
        <meta name='description' content='Rock Paper Scissors Game App' />
        <link rel='icon' href='/logo.svg' />
      </Head>

      <main className='min-h-screen bg-slate-800 text-white'>
        <section className='pt-6'>
          <Score />

          {!selection ? (
            <Options />
          ) : (
            <>
              <h2>You selected {selection}</h2>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
