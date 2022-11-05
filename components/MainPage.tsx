import React from 'react';
import { ProjectType, TSkill } from '../types';
import { About } from './About';
import { Contact } from './Contact/Contact';
import { Header } from './Header';
import { Hero } from './Heros/Hero';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';
import { z } from 'zod';

type Props = {
  projectData: z.infer<typeof ProjectType>[] | false;
  skillData: TSkill[] | false;
};

export const MainPage = ({ projectData, skillData }: Props) => {
  return (
    <>
      {/* Header */}
      <Header />
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth pb-4 scrollbar-hide lg:snap-proximity">
        {/* Hero */}
        <section
          id="hero"
          className="flex h-screen snap-start snap-always items-center justify-center overflow-hidden px-2"
        >
          <Hero />
        </section>
        {/* About */}
        <section
          id="about"
          className="flex h-screen snap-center snap-always items-center justify-center px-2"
        >
          <About />
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="grid min-h-screen snap-start snap-always grid-cols-1 place-content-center px-2 lg:snap-proximity lg:snap-center lg:snap-normal"
        >
          {projectData ? (
            <Projects projectData={projectData} />
          ) : (
            <div>Project Data Not Available</div>
          )}
        </section>
        {/* Skills */}
        <section
          id="skills"
          className="grid min-h-screen snap-center snap-always place-content-center px-2"
        >
          {skillData ? <Skills skillData={skillData} /> : <></>}
        </section>
        <section
          id="contact"
          className="grid snap-start snap-always grid-cols-1 place-content-center px-2 md:snap-center"
        >
          <Contact />
        </section>
      </main>
    </>
  );
};
