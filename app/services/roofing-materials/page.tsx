import { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Roofing Materials | Reliant Roofers',
  description: 'Premium roofing materials including slate, tiles, and natural materials. Expert supply and installation of quality roofing materials across the UK.',
};

export default function RoofingMaterialsPage() {
  return (
    <ServicePageLayout
      title="Roofing Materials"
      description="Premium roofing materials from trusted suppliers. We offer a wide range of slate, tiles, and natural materials, all expertly installed by our team."
      services={[
        'Slate Roofing Specialists',
        'Roof Tile Supply & Installation',
        'Natural Slate Roofing',
        'Clay & Concrete Roof Tiles',
      ]}
      features={[
        'Premium quality materials',
        'Wide range of options',
        'Natural and synthetic materials',
        'Expert installation included',
        'Long-lasting durability',
        'Competitive pricing',
      ]}
      process={[
        {
          step: 1,
          title: 'Material Consultation',
          description: 'We help you choose the best materials for your project and budget.',
        },
        {
          step: 2,
          title: 'Supply & Delivery',
          description: 'We source and deliver quality materials directly to your property.',
        },
        {
          step: 3,
          title: 'Professional Installation',
          description: 'Our expert team installs your chosen materials with precision and care.',
        },
        {
          step: 4,
          title: 'Quality Assurance',
          description: 'We ensure all materials are properly installed and meet quality standards.',
        },
      ]}
      images={[
        '/images/gallery/pitched roof.jpeg',
        '/images/gallery/pitched roof (2).jpeg',
      ]}
    />
  );
}

