import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Heros/Hero';
import { Skills } from '../components/Skills/Skills';

const Projects = dynamic(() =>
  import('../components/Projects/Projects').then((module) => module.Projects)
);
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hao Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide">
        {/* Hero */}
        <section
          id="hero"
          className="h-screen snap-start snap-always overflow-hidden px-2"
        >
          <Hero />
        </section>
        {/* About */}
        <section
          id="about"
          className="min-h-screen snap-center snap-always px-2"
        >
          <About />
        </section>
        {/* Skills */}
        <section
          id="skills"
          className="grid min-h-screen snap-center snap-always place-content-center px-2"
        >
          <Skills />
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="grid min-h-screen snap-none snap-proximity snap-start grid-cols-1 place-content-center px-2"
        >
          <Suspense fallback={<></>}>
            <Projects />
          </Suspense>
        </section>
        <section
          id="contact"
          className="grid min-h-screen snap-start snap-always grid-cols-1 place-content-center px-2"
        >
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
