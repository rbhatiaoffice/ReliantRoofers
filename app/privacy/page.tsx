import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Reliant Roofers',
  description: 'Privacy Policy for Reliant Roofers - How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-800 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              When you contact us through our website, we collect information that you provide to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Project details and requirements</li>
              <li>Any other information you choose to provide in your message</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Communicate with you about your roofing project</li>
              <li>Improve our services and website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
            <p className="text-gray-700 mb-6">
              We take the security of your personal information seriously and implement appropriate technical and 
              organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              only when necessary to provide our services or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

