import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Reliant Roofers',
  description: 'Terms of Service for Reliant Roofers - Terms and conditions for using our roofing services.',
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-800 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Terms and conditions for using our roofing services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using this website or engaging our services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-700 mb-6">
              Reliant Roofers provides professional roofing services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Pitched roofing installation and repairs</li>
              <li>Flat roofing solutions</li>
              <li>Roof repairs and maintenance</li>
              <li>Loft conversions</li>
              <li>New roof construction</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Quotes and Estimates</h2>
            <p className="text-gray-700 mb-6">
              All quotes and estimates provided are valid for the period stated and are subject to site survey. 
              Final pricing may vary based on actual site conditions and requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-6">
              Payment terms will be agreed upon before work commences. We accept various payment methods and may 
              require a deposit for larger projects. Full payment is typically due upon completion of work.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranties</h2>
            <p className="text-gray-700 mb-6">
              We provide warranties on our workmanship and materials as specified in individual project agreements. 
              All work is completed to industry standards and building regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Insurance</h2>
            <p className="text-gray-700 mb-6">
              Reliant Roofers is fully insured. We maintain public liability insurance and all our workers are 
              covered by appropriate insurance policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Our liability is limited to the value of the work completed. We are not liable for any indirect, 
              incidental, or consequential damages arising from our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:rishi.bhatia.office@gmail.com" className="text-slate-800 hover:underline">rishi.bhatia.office@gmail.com</a>
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Phone:</strong> <a href="tel:+447552386343" className="text-slate-800 hover:underline">+44 7552 386343</a>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="text-slate-800 font-semibold hover:underline inline-flex items-center gap-2"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

