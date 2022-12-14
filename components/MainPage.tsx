import React from 'react';
import { ProjectType, TSkill } from '../types';
import { About } from './About';
import { Contact } from './Contact/Contact';
import { Header } from './Header';
import { Hero } from './Heros/Hero';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';
import { z } from 'zod';
import { LazyMotion, domAnimation } from 'framer-motion';

type Props = {
  projectData: z.infer<typeof ProjectType>[] | false;
  skillData: TSkill[] | false;
};

export const MainPage = ({ projectData, skillData }: Props) => {
  return (
    <>
      {/* Header */}
      <Header />
      <LazyMotion features={domAnimation} strict>
        <main className="h-screen w-full snap-y snap-mandatory flex-col overflow-y-scroll scroll-smooth scrollbar-hide lg:h-full lg:snap-none lg:snap-proximity lg:overflow-y-visible ">
          {/* Hero */}
          <section
            id="hero"
            className="flex h-screen snap-start snap-always items-center justify-center overflow-hidden px-2 lg:snap-align-none lg:snap-normal"
          >
            <Hero />
          </section>
          {/* About */}
          <section
            id="about"
            className="flex h-screen snap-center snap-always items-center justify-center overflow-hidden px-2 lg:snap-align-none lg:snap-normal"
          >
            <About />
          </section>
          {/* Projects */}
          <section
            id="projects"
            className="min-h-screen snap-start snap-always overflow-hidden px-2 lg:snap-align-none lg:snap-normal "
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
            className="grid h-screen snap-center snap-always place-content-center px-2 lg:snap-align-none lg:snap-normal"
          >
            {skillData ? <Skills skillData={skillData} /> : <></>}
          </section>
          <section
            id="contact"
            className="flex h-screen snap-center snap-always items-center justify-center px-2 md:snap-center lg:snap-align-none lg:snap-normal"
          >
            <Contact />
          </section>
        </main>
      </LazyMotion>
    </>
  );
};
