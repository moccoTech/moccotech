import Heading from './components/Heading';
import HomeBanner from './components/homepage/HomeBanner';
import ProjectsGrid from './components/projects/ProjectGrid';
import ReviewsBlock from './components/reviews/ReviewsBlock';
import ServicesBlock from './components/services/ServicesBlock';
import { client } from './lib/sanity';

export const revalidate = 0;

export const metadata = {
  title: 'Mocco Tech | Website Development Agency',
  description:
    'We develop modern and optimized web applications. We are an international company creating web-applications of any complexity',

  metadataBase: new URL('https://www.moccotech.com'),
  openGraph: {
    title: `Mocco Tech | Website Development Agency`,
    description:
      'We develop modern and optimized web applications. We are an international company creating web-applications of any complexity',
    url: `https://www.moccotech.com`,
    siteName: 'Mocco Tech',
    images: [
      {
        url: '/website-develomnet.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

async function getTechnologies() {
  const query = `*[_type == 'technologies'] {
    icon,
    title,
    _id
  }`;

  const technologies = await client.fetch(query);

  return technologies;
}

async function getProjects() {
  const query = `*[_type == 'projects']{
    title,
    _id
  }`;

  const projects = await client.fetch(query);

  return projects;
}

async function getServices() {
  const query = `*[_type == 'services']{
    title,
    description,
    shortDescription,
    icon,
    id
  }`;

  const projects = await client.fetch(query);

  return projects;
}

export default async function Home() {
  const technologies = await getTechnologies();
  const projects = await getProjects();
  const services = await getServices();
  const sortedServices = services.sort((a, b) => a.id - b.id);

  return (
    <main>
      <HomeBanner technologies={technologies} projects={projects} />

      <div className="bg-gray-50 border-y px-4 py-10 sm:p-4 font-body sm:py-8 sm:px-8">
        <Heading type="h2">Services</Heading>
        <ServicesBlock services={sortedServices} />
      </div>

      <div className="px-4 py-8 sm:p-4 font-body sm:py-8 sm:px-8">
        <Heading type="h2">Projects</Heading>
        <ProjectsGrid />
      </div>

      <div
        id="feedback"
        className="bg-gray-50 border-y py-10 px-4 sm:p-4 font-body sm:py-8 sm:px-8"
      >
        <Heading type="h2">What people say?</Heading>
        <ReviewsBlock />
      </div>
    </main>
  );
}
