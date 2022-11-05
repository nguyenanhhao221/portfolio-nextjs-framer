import React from 'react';
import { m } from 'framer-motion';
import { SectionTitle } from '../SectionTitle';
import { TSkill } from '../../types';
import { restructureSkillData } from '../../helpers/utils';
import { SkillItem } from './SkillItem';

type Props = {
  skillData: TSkill[];
};

export const Skills = ({ skillData }: Props) => {
  const listMotion = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 2.5,
      },
    },
  };
  /*   
  Because the raw Data about Skills in Sanity is a bit messy so Final data shape we want
  [
    { category: 'front-end', data: [] },
    { category: 'back-end', data: [] },
  ];
   */
  const sortedData = restructureSkillData(skillData);
  //Motion variants
  const itemMotion = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-2">
      <SectionTitle title="Skills" />
      <div className="md:gap:6 flex flex-col gap-4 sm:px-4">
        {sortedData.map((skill) => (
          <div
            key={skill.category}
            className="space-y-2 rounded-lg border-gray-900 bg-slate-800 bg-opacity-10 shadow-2xl  md:p-4"
          >
            <m.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="hover:shadow-highlight-blue inline-block font-bold capitalize tracking-widest md:text-xl"
            >
              {skill.category}:
            </m.h2>
            <m.ul
              variants={listMotion}
              initial={'hidden'}
              whileInView={'visible'}
              exit={{ opacity: 0 }}
              className="flex flex-row flex-wrap justify-center gap-1 py-1 sm:gap-2 md:gap-8 lg:gap-10"
            >
              {skill.data.map((eachSkill) => (
                <m.li
                  key={eachSkill._id}
                  variants={itemMotion}
                  className="group"
                >
                  <SkillItem skill={eachSkill} />
                </m.li>
              ))}
            </m.ul>
          </div>
        ))}
      </div>
    </div>
  );
};
