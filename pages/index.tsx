import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/About/About';
import { Header } from '../components/Header';
import { Hero } from '../components/Heros/Hero';
import { Projects } from '../components/Projects/Projects';
import { Skills } from '../components/Skills/Skills';

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
        <section id="about" className="h-screen snap-center snap-always px-2">
          <About />
        </section>
        {/* Skills */}
        <section
          id="skills"
          className="grid h-screen snap-center snap-always place-content-center px-2"
        >
          <Skills />
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="min-h-screen snap-none snap-proximity snap-start px-2 lg:grid lg:place-content-center"
        >
          <Projects />
        </section>
      </main>
    </>
  );
};

export default Home;
