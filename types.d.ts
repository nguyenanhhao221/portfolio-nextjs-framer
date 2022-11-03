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
  projectLiveLink: z.string().url(),
  projectName: z.string().min(1),
  projectSummary: z.string().min(1),
});
export type TProject = z.infer<typeof ProjectType>;
