import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Reliant Roofers',
  description: 'Get in touch with Reliant Roofers for a free quote. Contact us by phone, email, or use our contact form. We serve customers across the UK.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Get in touch for a free, no-obligation quote on your roofing project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-slate-800 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+447393121621" className="text-slate-800 hover:underline">
                      07393 121 621
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-slate-800 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@royalroofworks.com" className="text-slate-800 hover:underline">
                      info@royalroofworks.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-slate-800 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-700">UK Wide Service</p>
                    <p className="text-sm text-gray-600 mt-1">Serving customers across the United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-slate-800 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Emergency services available 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-400">Google Maps Integration Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

