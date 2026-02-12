import { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'New Roof Construction in Croydon & Swindon | Expert Roofers',
  description: 'Complete new roof installations for new builds, extensions, and renovations in Croydon, Swindon, and outer London. Expert timber framing and structural roofing work. Free quotes.',
  keywords: 'new roof construction Croydon, new roof installation Swindon, roofers outer London, timber framing Croydon, structural roofing Swindon',
};

export default function NewRoofsConstructionPage() {
  return (
    <ServicePageLayout
      title="New Roofs & Construction"
      description="Complete roofing solutions for new builds, extensions, and renovation projects. We handle everything from timber framing to final roof installation."
      services={[
        'New Roof Installations',
        'New Build Roofing Services',
        'Roofing for Extensions & Renovations',
        'Timber Roof Structures & Framing',
        'Structural Roofing Work',
      ]}
      features={[
        'Complete new build roofing solutions',
        'Expert timber framing and structures',
        'Seamless integration with extensions',
        'Building regulations compliance',
        'Quality materials and workmanship',
        'Project management from start to finish',
      ]}
      process={[
        {
          step: 1,
          title: 'Planning & Design',
          description: 'We work with you and your architect to design the perfect roof for your project.',
        },
        {
          step: 2,
          title: 'Structural Work',
          description: 'Our team handles all timber framing and structural requirements.',
        },
        {
          step: 3,
          title: 'Roof Installation',
          description: 'Professional installation of your chosen roofing system.',
        },
        {
          step: 4,
          title: 'Completion & Certification',
          description: 'Final inspection and certification to ensure compliance with building regulations.',
        },
      ]}
      images={[
        '/images/gallery/pitched roof.jpeg',
        '/images/gallery/pitched roof (2).jpeg',
        '/images/gallery/picted roof extension.jpeg',
      ]}
    />
  );
}

