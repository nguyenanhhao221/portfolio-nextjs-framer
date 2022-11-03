export default {
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
      type: 'string',
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
