import { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Loft Conversions in Croydon & Outer London | Expert Roofers',
  description: 'Expert roofing solutions for loft conversions in Croydon and outer London (up to 30 miles). Specialists in structural alterations, RSJs, dormer construction, and roof raising. Free quotes.',
  keywords: 'loft conversions Croydon, loft conversions outer London, dormer construction outer London, roof raising Croydon, structural roofing outer London',
};

export default function LoftConversionsPage() {
  return (
    <ServicePageLayout
      title="Loft Conversions & Structural Work"
      description="Complete roofing solutions for loft conversion projects. We handle all structural work, including steel beams, dormer construction, and roof modifications."
      services={[
        'Loft Conversion Roofing Solutions',
        'Structural Alterations for Loft Conversions',
        'Steel Beams (RSJs) & Roof Strengthening',
        'Dormer Roof Construction',
        'Roof Raising & Structural Modifications',
      ]}
      features={[
        'Complete loft conversion roofing',
        'Expert structural engineering',
        'RSJ installation and support',
        'Dormer window integration',
        'Building regulations compliance',
        'Seamless integration with existing structure',
      ]}
      process={[
        {
          step: 1,
          title: 'Structural Assessment',
          description: 'We assess your existing roof structure and plan necessary modifications.',
        },
        {
          step: 2,
          title: 'Structural Work',
          description: 'Installation of RSJs and structural supports as required.',
        },
        {
          step: 3,
          title: 'Roof Modifications',
          description: 'Construction of dormers and roof raising to create your new space.',
        },
        {
          step: 4,
          title: 'Final Roofing',
          description: 'Complete roofing installation with proper insulation and weatherproofing.',
        },
      ]}
      images={[
        '/images/gallery/dormer.jpeg',
        '/images/gallery/dormer (2).jpeg',
        '/images/gallery/dormer (3).jpeg',
        '/images/gallery/dormer (4).jpeg',
        '/images/gallery/dormer (5).jpeg',
        '/images/gallery/dormer (6).jpeg',
        '/images/gallery/dormer (7).jpeg',
        '/images/gallery/dormer (8).jpeg',
        '/images/gallery/dormer (9).jpeg',
        '/images/gallery/loft.jpeg',
      ]}
    />
  );
}

