export const projectsSchema = {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    { name: 'projectName', type: 'string', title: "Project's name" },
    {
      name: 'projectImage',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'projectSummary',
      type: 'text',
      title: 'Summary',
    },
    {
      name: 'projectLiveLink',
      type: 'url',
      title: 'Live Demo',
    },
    {
      name: 'projectGitHub',
      type: 'url',
      title: 'Project GitHub Repo',
    },
  ],
};
