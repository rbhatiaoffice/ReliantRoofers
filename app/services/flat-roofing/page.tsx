import { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Flat Roofing in Croydon & Swindon | Professional Roofers',
  description: 'Professional flat roofing installation and repairs in Croydon, Swindon, and outer London. Specialists in felt, torch-on, and GRP fibreglass flat roof systems. Free quotes.',
  keywords: 'flat roofing Croydon, flat roofing Swindon, GRP roofing outer London, felt roofing Croydon, torch-on roofing Swindon',
};

export default function FlatRoofingPage() {
  return (
    <ServicePageLayout
      title="Flat Roofing"
      description="Professional flat roofing solutions for residential and commercial properties. We offer a range of systems including felt, torch-on, and GRP fibreglass options."
      services={[
        'Flat Roof Installation & Replacement',
        'Felt Roofing Systems',
        'Torch-On Felt Roofing',
        'GRP Fibreglass Flat Roofs',
        'Flat Roof Repairs & Maintenance',
      ]}
      features={[
        'Multiple roofing system options',
        'Durable, weather-resistant materials',
        'Expert installation and repairs',
        'Long-term warranty options',
        'Energy-efficient solutions',
        'Professional maintenance services',
      ]}
      process={[
        {
          step: 1,
          title: 'Roof Assessment',
          description: 'We evaluate your flat roof condition and recommend the best system for your needs.',
        },
        {
          step: 2,
          title: 'System Selection',
          description: 'Choose from felt, torch-on, or GRP systems based on your requirements and budget.',
        },
        {
          step: 3,
          title: 'Professional Installation',
          description: 'Our experienced team installs your flat roof using industry best practices.',
        },
        {
          step: 4,
          title: 'Final Inspection',
          description: 'We ensure your new flat roof is properly sealed and ready for years of service.',
        },
      ]}
      images={[
        '/images/gallery/flat roof.jpeg',
        '/images/gallery/flat roof (2).jpeg',
      ]}
    />
  );
}

