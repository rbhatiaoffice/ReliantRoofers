import { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Roof Repairs & Maintenance | Reliant Roofers',
  description: 'Fast, reliable roof repairs for all roof types. Emergency services, leak repairs, storm damage, and routine maintenance across the UK.',
};

export default function RepairsMaintenancePage() {
  return (
    <ServicePageLayout
      title="Repairs & Maintenance"
      description="Fast, reliable roof repairs and maintenance services for all roof types. We offer emergency services and routine maintenance to keep your roof in perfect condition."
      services={[
        'Roof Repairs (All Roof Types)',
        'Leaking Roof Repairs',
        'Storm Damage Roofing Repairs',
        'Emergency Roofing Services',
        'Roof Inspections & Maintenance',
        'Chimney Repairs & Maintenance',
        'Chimney Repointing',
        'Chimney Stack Rebuilds',
      ]}
      features={[
        '24/7 emergency repair service',
        'Fast response times',
        'All roof types covered',
        'Comprehensive inspections',
        'Preventive maintenance programs',
        'Expert chimney repairs',
      ]}
      process={[
        {
          step: 1,
          title: 'Emergency Response',
          description: 'Quick assessment and temporary protection if needed for urgent repairs.',
        },
        {
          step: 2,
          title: 'Detailed Inspection',
          description: 'Thorough examination to identify all issues and required repairs.',
        },
        {
          step: 3,
          title: 'Repair Work',
          description: 'Professional repairs using quality materials and proven techniques.',
        },
        {
          step: 4,
          title: 'Prevention Advice',
          description: 'We provide advice on maintaining your roof to prevent future issues.',
        },
      ]}
      images={[
        '/images/gallery/gutter fascia.jpeg',
        '/images/gallery/lead valley.jpeg',
      ]}
    />
  );
}

