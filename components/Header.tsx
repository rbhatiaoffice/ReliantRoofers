'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', submenu: [
      { name: 'All Services', href: '/services' },
      { name: 'Pitched Roofing', href: '/services/pitched-roofing' },
      { name: 'Flat Roofing', href: '/services/flat-roofing' },
      { name: 'New Roofs & Construction', href: '/services/new-roofs-construction' },
      { name: 'Loft Conversions', href: '/services/loft-conversions' },
      { name: 'Repairs & Maintenance', href: '/services/repairs-maintenance' },
      { name: 'Additional Services', href: '/services/additional-services' },
      { name: 'Roofing Materials', href: '/services/roofing-materials' },
    ]},
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-12 bg-slate-800 rounded flex items-center justify-center text-white font-bold text-xl">
                RR
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Reliant Roofers</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name} className="relative group">
                    <button className="text-gray-700 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors">
                      {item.name}
                    </button>
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-slate-800"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 font-semibold"
            >
              <Phone className="h-4 w-4" />
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-slate-800 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1">
              {navigation.map((item) => {
                if (item.submenu) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div className="text-gray-700 px-3 py-2 text-base font-medium">
                        {item.name}
                      </div>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-6 py-2 text-sm text-gray-600 hover:bg-slate-50 hover:text-slate-800"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-800"
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 mx-3 bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 text-center font-semibold shadow-md"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

