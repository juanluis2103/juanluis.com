import type { Project } from '~/types/project'

const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['Vue', 'Nuxt', 'Three.js'],
    thumbnail: '',
    url: '',
    repo: '',
  },
  {
    id: '2',
    title: 'Project Beta',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['TypeScript', 'GSAP', 'Tailwind'],
    thumbnail: '',
    url: '',
    repo: '',
  },
]

export function useProjects() {
  return projects
}
