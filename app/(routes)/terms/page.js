import Heading from '@/app/components/Heading';

export const metadata = {
  title: 'Mocco Tech - Contact us',
  description:
    'Contact us and get the price of your new website. Mobile applications development. Platforms development. Build your Social Media',

  metadataBase: new URL('https://www.moccotech.com'),
  openGraph: {
    title: `Mocco Tech - Contact us`,
    description:
      'Contact us and get the price of your new website. Mobile applications development. Platforms development. Build your Social Media',
    url: `https://moccotech.com/contact`,
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

function TermsPage() {
  return (
    <main className="px-4 py-10 sm:p-4 font-body sm:py-12 sm:px-8 flex flex-col gap-12">
      <Heading>Terms and conditions</Heading>
      <p></p>
    </main>
  );
}

export default TermsPage;
