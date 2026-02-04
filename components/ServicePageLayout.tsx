import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  services: string[];
  features?: string[];
  process?: { step: number; title: string; description: string }[];
  images?: string[];
  children?: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  description,
  services,
  features,
  process,
  images,
  children,
}: ServicePageLayoutProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-orange-100 max-w-3xl">{description}</p>
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
                      <span className="text-slate-800 mr-3 mt-1">✓</span>
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
                        <span className="text-slate-800 mr-3 mt-1">•</span>
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
                        <div className="flex-shrink-0 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold">
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

              {/* Service Images */}
              {images && images.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
                  <ImageCarousel images={images} alt={`${title} service`} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Free Quote</h3>
                <p className="text-gray-700 mb-6">
                  Contact us today for a free, no-obligation quote on your {title.toLowerCase()} project.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-orange-600 text-white text-center py-3 px-6 rounded-lg hover:bg-orange-700 transition-all shadow-md hover:shadow-lg mb-4 font-semibold"
                >
                  Request Quote
                </Link>
                <div className="border-t border-orange-200 pt-4 mt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Call Us Directly</p>
                  <a
                        href="tel:+447552386343"
                    className="text-slate-800 font-semibold hover:underline flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                        +44 7552 386343
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

