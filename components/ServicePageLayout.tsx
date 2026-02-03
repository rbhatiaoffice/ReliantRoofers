import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  services: string[];
  features?: string[];
  process?: { step: number; title: string; description: string }[];
  children?: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  description,
  services,
  features,
  process,
  children,
}: ServicePageLayoutProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services List */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our {title} Services</h2>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-900 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              {features && features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features & Benefits</h2>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-900 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Process */}
              {process && process.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Process</h2>
                  <div className="space-y-6">
                    {process.map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Content */}
              {children}

              {/* Image Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <span className="text-gray-400">Service Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Free Quote</h3>
                <p className="text-gray-700 mb-6">
                  Contact us today for a free, no-obligation quote on your {title.toLowerCase()} project.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-900 text-white text-center py-3 px-6 rounded-md hover:bg-blue-800 transition-colors mb-4"
                >
                  Request Quote
                </Link>
                <div className="border-t border-blue-200 pt-4 mt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Call Us Directly</p>
                  <a
                    href="tel:+441234567890"
                    className="text-blue-900 font-semibold hover:underline flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    01234 567 890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

