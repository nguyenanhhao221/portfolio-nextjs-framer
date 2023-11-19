import { z } from 'zod';
const TSanityBase = z.object({
  _createdAt: z.date(),
  _id: z.string().uuid(),
  _rev: z.string(),
  _type: z.string().min(1),
  _updatedAt: z.date(),
});
export const ProjectType = TSanityBase.extend({
  projectGitHub: z.string().url(),
  projectImage: z.string(),
  projectLiveLink: z.string().url().optional(),
  projectName: z.string().min(1),
  projectSummary: z.string().min(1),
});
export type TProject = z.infer<typeof ProjectType>;

export const SkillType = TSanityBase.extend({
  category: z.string().min(1),
  image: z.string(),
  link: z.string().url(),
  skills: z.string().min(1),
});

export type TSkill = z.infer<typeof SkillType>;
