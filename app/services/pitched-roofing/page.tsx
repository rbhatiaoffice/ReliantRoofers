import { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Pitched Roofing in Croydon & Outer London | Expert Roofers',
  description: 'Expert pitched roofing installation, replacement, and repairs in Croydon and outer London (up to 30 miles). Specialists in tiled, slate, and traditional pitched roof systems. Free quotes available.',
  keywords: 'pitched roofing Croydon, pitched roofing outer London, roofers Croydon, roofers outer London, tiled roofing outer London, slate roofing Croydon',
};

export default function PitchedRoofingPage() {
  return (
    <ServicePageLayout
      title="Pitched Roofing"
      description="Expert installation, replacement, and repairs for all types of pitched roofs. We specialize in traditional and modern pitched roofing systems using quality materials."
      services={[
        'Pitched Roof Installation & Replacement',
        'Tiled & Slate Roofing Specialists',
        'Clay Tiles, Concrete Tiles & Natural Slate',
        'Roof Repairs for Pitched Roofs',
        'Traditional & Modern Pitched Roof Systems',
        'Dry Ridge Systems Installation & Repairs',
        'Dry Valley Systems Installation',
        'Ridge Tile Repointing & Re-bedding',
      ]}
      features={[
        'Expert installation using premium materials',
        'Wide range of tile and slate options',
        'Traditional and modern techniques',
        'Long-lasting, weather-resistant solutions',
        'Professional repairs and maintenance',
        'Fully insured and certified workmanship',
      ]}
      process={[
        {
          step: 1,
          title: 'Initial Consultation',
          description: 'We assess your roofing needs and provide expert advice on the best solutions for your property.',
        },
        {
          step: 2,
          title: 'Detailed Quote',
          description: 'Receive a comprehensive, transparent quote with no hidden costs.',
        },
        {
          step: 3,
          title: 'Professional Installation',
          description: 'Our skilled team installs your new roof using quality materials and proven techniques.',
        },
        {
          step: 4,
          title: 'Quality Assurance',
          description: 'We conduct thorough inspections to ensure your roof meets the highest standards.',
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

