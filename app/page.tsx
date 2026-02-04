import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';

export default function Home() {
  const services = [
    {
      name: 'Pitched Roofing',
      description: 'Expert installation and repairs for tiled and slate roofs',
      href: '/services/pitched-roofing',
      icon: '🏠',
    },
    {
      name: 'Flat Roofing',
      description: 'Professional flat roof solutions including GRP and felt systems',
      href: '/services/flat-roofing',
      icon: '🏢',
    },
    {
      name: 'Loft Conversions',
      description: 'Complete roofing solutions for your loft conversion project',
      href: '/services/loft-conversions',
      icon: '📐',
    },
    {
      name: 'Repairs & Maintenance',
      description: 'Fast, reliable repairs for all roof types and emergency services',
      href: '/services/repairs-maintenance',
      icon: '🔧',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-slate-800" />,
      title: 'Certified Professionals',
      description: 'Fully qualified and insured roofing specialists',
    },
    {
      icon: <Clock className="h-8 w-8 text-slate-800" />,
      title: 'Years of Experience',
      description: 'Over 15 years serving customers across the UK',
    },
    {
      icon: <Shield className="h-8 w-8 text-slate-800" />,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for your peace of mind',
    },
    {
      icon: <Users className="h-8 w-8 text-slate-800" />,
      title: 'Trusted by Thousands',
      description: 'Satisfied customers throughout the UK',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Roofing Services
              <span className="block mt-2 text-orange-400">You Can Trust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Expert roofers providing quality pitched and flat roofing, repairs, and new construction 
              services across the UK. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Reliant Roofers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience, Reliant Roofers is your trusted partner for all roofing 
              needs. We specialize in both traditional and modern roofing solutions, delivering quality 
              craftsmanship and exceptional customer service throughout the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive roofing solutions for residential and commercial properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-slate-800 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-slate-800 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-slate-800 font-semibold hover:underline inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Reliant Roofers?
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;re committed to delivering excellence in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-orange-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-orange-300">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">UK Wide</div>
              <div className="text-orange-300">Service Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-lg text-gray-600">
              Quality craftsmanship in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                title: 'Pitched Roof Installation', 
                description: 'Professional pitched roofing with premium materials',
                image: '/images/gallery/pitched roof.jpeg'
              },
              { 
                title: 'Flat Roof Installation', 
                description: 'Durable flat roof system for commercial properties',
                image: '/images/gallery/flat roof.jpeg'
              },
              { 
                title: 'Dormer Construction', 
                description: 'Expert loft conversion and dormer installation',
                image: '/images/gallery/dormer.jpeg'
              }
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              View Full Gallery
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch today for a free, no-obligation quote. Our team is ready to help with all your roofing needs.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Contact Us Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
