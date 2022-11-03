import React from 'react';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Header } from './Header/Header';
import { Hero } from './Heros/Hero';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';

export const MainPage = () => {
  return (
    <>
      {/* Header */}
      <Header />
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide md:snap-proximity">
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
        {/* Projects */}
        <section
          id="projects"
          className="grid min-h-screen snap-start snap-always grid-cols-1 place-content-center px-2 lg:snap-proximity lg:snap-center lg:snap-normal"
        >
          <Projects />
        </section>
        {/* Skills */}
        <section
          id="skills"
          className="grid min-h-screen snap-center snap-always place-content-center px-2"
        >
          <Skills />
        </section>
        <section
          id="contact"
          className="grid min-h-screen snap-start snap-always grid-cols-1 place-content-center px-2 md:snap-center md:py-20"
        >
          <Contact />
        </section>
      </main>
    </>
  );
};
