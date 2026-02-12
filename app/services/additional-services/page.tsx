import { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Additional Roofing Services in Croydon & Swindon | Reliant Roofers',
  description: 'Comprehensive additional roofing services in Croydon, Swindon, and outer London including leadwork, flashings, fascias, soffits, guttering, Velux windows, and insulation.',
  keywords: 'gutter repairs Croydon, fascia soffit Swindon, leadwork outer London, Velux windows Croydon, roofing accessories Swindon',
};

export default function AdditionalServicesPage() {
  return (
    <ServicePageLayout
      title="Additional Roofing Services"
      description="Complete roofing solutions including leadwork, flashings, fascias, soffits, guttering, and roof windows. We handle all aspects of your roofing project."
      services={[
        'Leadwork & Flashings',
        'Lead Flashing Installation & Repairs',
        'Lead Valleys & Step Flashings',
        'Fascias, Soffits & Guttering',
        'Chimney Repairs & Repointing',
        'Velux & Roof Window Installation',
        'Insulation & Energy-Efficient Roofing',
      ]}
      features={[
        'Expert leadwork and flashings',
        'Quality fascias and soffits',
        'Professional guttering installation',
        'Roof window integration',
        'Energy-efficient insulation',
        'Complete roofing solutions',
      ]}
      process={[
        {
          step: 1,
          title: 'Assessment',
          description: 'We assess your needs for additional roofing components and accessories.',
        },
        {
          step: 2,
          title: 'Material Selection',
          description: 'Choose from quality materials that match your existing roof and budget.',
        },
        {
          step: 3,
          title: 'Professional Installation',
          description: 'Expert installation ensuring proper integration with your existing roof.',
        },
        {
          step: 4,
          title: 'Quality Check',
          description: 'Final inspection to ensure everything is properly installed and functioning.',
        },
      ]}
      images={[
        '/images/gallery/gutter fascia.jpeg',
        '/images/gallery/lead valley.jpeg',
      ]}
    />
  );
}

