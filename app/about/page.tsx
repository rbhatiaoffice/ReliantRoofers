import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Users, Shield, MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Reliant Roofers',
  description: 'Learn about Reliant Roofers - over 15 years of experience providing professional roofing services across the UK. Certified, insured, and trusted by thousands.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-900" />,
      title: 'Quality Craftsmanship',
      description: 'We take pride in delivering exceptional workmanship on every project, no matter the size.',
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-900" />,
      title: 'Reliability',
      description: 'You can count on us to complete your project on time and within budget.',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-900" />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We work closely with you throughout the entire process.',
    },
  ];

  const certifications = [
    'Fully Insured & Licensed',
    'NFRC Certified Members',
    'CSCS Certified Workers',
    'Health & Safety Compliant',
    'Building Regulations Approved',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Reliant Roofers</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Trusted roofing experts serving customers across the UK for over 15 years
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Reliant Roofers was founded with a simple mission: to provide exceptional roofing 
                  services that homeowners and businesses can trust. With over 15 years of experience 
                  in the industry, we've built a reputation for quality, reliability, and outstanding 
                  customer service.
                </p>
                <p>
                  What started as a small local business has grown into a trusted name across the UK, 
                  serving thousands of satisfied customers. Our team of skilled professionals brings 
                  expertise in all aspects of roofing, from traditional pitched roofs to modern flat 
                  roofing systems.
                </p>
                <p>
                  We believe that a roof is one of the most important parts of any building, protecting 
                  what matters most. That's why we never compromise on quality and always use the best 
                  materials and techniques available.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-400">Company Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering excellence in every project while maintaining the highest 
              standards of professionalism and integrity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Reliant Roofers?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience & Expertise</h3>
              <p className="text-gray-700 mb-4">
                With over 15 years of experience, our team has the knowledge and skills to handle any 
                roofing project, from simple repairs to complex new installations. We stay up-to-date 
                with the latest techniques and materials in the industry.
              </p>
              <p className="text-gray-700">
                Our craftsmen are fully trained and certified, ensuring that every job is completed to 
                the highest standards. We take pride in our work and stand behind it with comprehensive 
                warranties.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Certifications & Accreditations</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-300" />
            <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We provide professional roofing services across the United Kingdom. Whether you're in 
              a major city or a rural area, we're here to help with all your roofing needs.
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-blue-200 mb-6">
              Contact us to see if we cover your area. We're always expanding our service coverage 
              to reach more customers.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

