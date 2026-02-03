import { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Loft Conversions & Structural Work | Reliant Roofers',
  description: 'Expert roofing solutions for loft conversions. Specialists in structural alterations, RSJs, dormer construction, and roof raising across the UK.',
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
    />
  );
}

