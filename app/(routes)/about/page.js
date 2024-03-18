import AboutPageContent from '@/app/components/AboutPageContent';
import Heading from '@/app/components/Heading';
import { client } from '@/app/lib/sanity';

export const metadata = {
  title: 'Mocco Tech - About us',
  description:
    'Hi there from Mocco Tech ! Website development is our passion. We are an international company creating web-applications of any complexity',

  metadataBase: new URL('https://www.moccotech.com'),
  openGraph: {
    title: `Mocco Tech - About us`,
    description:
      'Hi there from Mocco Tech ! Website development is our passion. We are an international company creating web-applications of any complexity',
    url: `https://moccotech.com/about`,
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

async function getData() {
  const query = `*[_type == 'aboutPage'][0] {
    image,
    description,
    blockEditor
    }`;

  const data = client.fetch(query);

  return data;
}

export const revalidate = 0;

async function AboutPage() {
  const data = await getData();

  return (
    <main className="px-4 py-8 sm:p-4 font-body sm:py-8 sm:px-8">
      <Heading>About us</Heading>
      <AboutPageContent content={data} />
    </main>
  );
}

export default AboutPage;
