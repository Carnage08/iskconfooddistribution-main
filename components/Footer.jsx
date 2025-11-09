import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { value: "Terms & Conditions", href: "#!" },
  { value: "Privacy Policy", href: "#!" },
  { value: "Refund Policy", href: "#!" },
];

const mainMenu = [
  { value: "Upcoming Events", href: "#Upcoming" },
  { value: "Impact", href: "#Impacts" },
  { value: "Gallery", href: "/Gallery" },
  { value: "About Us", href: "/About_Us" },
];

const addressInfo = [
  {
    icon: <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-[#EBA83A]" />,
    value: "LRP Rd. Near Hotel The Elite Inn, Lakhimpur, Uttar Pradesh",
    href: "https://www.google.com/maps/search/?api=1&query=LRP+Rd+Lakhimpur",
  },
  {
    icon: <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-[#EBA83A]" />,
    value: "info@iskconkanpur.com",
    href: "mailto:info@iskconkanpur.com",
  },
  {
    icon: <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-[#EBA83A]" />,
    value: "+91 7080155081",
    href: "tel:+917080155081",
  },
];

const languages = [
  { value: "en", text: "English" },
  { value: "bn", text: "Bangla" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-700 dark:text-gray-300 py-10">
      <div className="container mx-auto px-4">
        
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ✅ Column 1 — Logo (Left Align on Desktop) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <img src="/logo.png" className="h-20 w-auto" alt="Logo" />
          </div>

          {/* ✅ Column 2,3,4 — Links + Address */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

              {/* Quick Links */}
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-3">Quick Links</h5>
                <ul className="space-y-2">
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="opacity-80 hover:opacity-100 transition">
                        {link.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Menu */}
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-3">Main Menu</h5>
                <ul className="space-y-2">
                  {mainMenu.map((item, i) => (
                    <li key={i}>
                      <a href={item.href} className="opacity-80 hover:opacity-100 transition">
                        {item.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address */}
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-3">Address</h5>
                <ul className="space-y-3">
                  {addressInfo.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-center md:justify-start text-left"
                    >
                      {item.icon}
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-80 hover:opacity-100 transition leading-snug"
                      >
                        {item.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ✅ Language Selector */}
            <div className="mt-8 flex justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <label htmlFor="language-select">Language:</label>
                <select
                  id="language-select"
                  name="language"
                  className="bg-transparent border-gray-600 border rounded-md p-1 focus:ring-0 outline-none"
                >
                  {languages.map((lang, i) => (
                    <option key={i} value={lang.value} className="bg-white dark:bg-black">
                      {lang.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ✅ Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center lg:text-left opacity-70 text-sm">
              <span>© Iskcon Food Distribution — All Rights Reserved.</span>
              
              <div className="inline-block sm:ml-4 mt-2 sm:mt-0">
                {quickLinks.map((item, i) => (
                  <a href={item.href} key={i} className="ml-4 hover:underline">
                    {item.value}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
