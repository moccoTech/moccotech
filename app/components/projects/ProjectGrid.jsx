import { client, urlFor } from '@/app/lib/sanity';
import ProjectCard from './ProjectCard';

async function getProjects() {
  const query = `*[_type == 'projects'] {
    title,
    description,
    "slug": slug.current,
    images,
    link
  }`;

  const data = await client.fetch(query);

  return data;
}

async function ProjectsGrid({ params }) {
  const projects = await getProjects();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.slug}
          title={project.title}
          shortDescription={project.description}
          image={urlFor(project.images[0]).url()}
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;
