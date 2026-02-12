import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roofing Services in Croydon & Outer London | Reliant Roofers',
  description: 'Professional roofing services in Croydon and outer London (up to 30 miles). Expert roofers for pitched roofing, flat roofing, roof repairs, loft conversions, and new construction. Free quotes available.',
  keywords: 'roofing services Croydon, roofing services outer London, roofers Croydon, roofers outer London, roof repairs outer London, pitched roofing Croydon, flat roofing outer London',
};

const services = [
  {
    name: 'Pitched Roofing',
    description: 'Expert installation and repairs for tiled and slate roofs, including traditional and modern systems.',
    href: '/services/pitched-roofing',
    icon: '🏠',
  },
  {
    name: 'Flat Roofing',
    description: 'Professional flat roof solutions including felt, torch-on, and GRP fibreglass systems.',
    href: '/services/flat-roofing',
    icon: '🏢',
  },
  {
    name: 'New Roofs & Construction',
    description: 'Complete new roof installations for new builds, extensions, and renovation projects.',
    href: '/services/new-roofs-construction',
    icon: '🏗️',
  },
  {
    name: 'Loft Conversions',
    description: 'Complete roofing solutions for loft conversion projects with structural work and modifications.',
    href: '/services/loft-conversions',
    icon: '📐',
  },
  {
    name: 'Repairs & Maintenance',
    description: 'Fast, reliable roof repairs for all roof types, including emergency services and maintenance.',
    href: '/services/repairs-maintenance',
    icon: '🔧',
  },
  {
    name: 'Additional Services',
    description: 'Leadwork, flashings, fascias, soffits, guttering, Velux windows, and insulation services.',
    href: '/services/additional-services',
    icon: '⚙️',
  },
  {
    name: 'Roofing Materials',
    description: 'Premium roofing materials including slate, tiles, and natural materials with expert installation.',
    href: '/services/roofing-materials',
    icon: '🧱',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roofing Services in Croydon & Outer London</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Comprehensive roofing solutions for residential and commercial properties in Croydon and outer London areas (up to 30 miles). Expert roofers with 15+ years experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group border border-gray-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-slate-800 transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-slate-800 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help Choosing a Service?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our expert team can help you determine the best roofing solution for your needs. 
            Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Get Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

