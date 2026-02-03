import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Reliant Roofers',
  description: 'Browse our portfolio of completed roofing projects. View our work in pitched roofing, flat roofing, loft conversions, and more.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

