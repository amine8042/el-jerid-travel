import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#f6f3ed] py-16 border-t border-[#d3c3bc]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-[#4f443f]">
        {/* Brand Col */}
        <div className="flex flex-col gap-2">
          <span
            onClick={() => onNavigate && onNavigate('accueil')}
            className="font-headline-sm text-[#392317] font-semibold tracking-tight cursor-pointer"
          >
            EL JERID TRAVEL
          </span>
          <p className="text-body-sm text-[#4f443f] leading-relaxed">
            Curated luxury desert expeditions and high-end travel experiences in the heart of the Tunisian Sahara.
          </p>
        </div>

        {/* Contact Col */}
        <div className="flex flex-col gap-2">
          <span className="label-lg text-[#392317] uppercase tracking-wider font-semibold">
            Contact Info
          </span>
          <p className="text-body-sm text-[#4f443f]">
            Zone Touristique, Tozeur 2210, Tunisia
          </p>
          <p className="text-body-sm text-[#4f443f]">
            Phone: <a href="tel:+21655454406" className="hover:text-[#974722] transition-colors">+216 55 454 406</a>
          </p>
        </div>

        {/* Hours Col */}
        <div className="flex flex-col gap-2">
          <span className="label-lg text-[#392317] uppercase tracking-wider font-semibold">
            Hours
          </span>
          <p className="text-body-sm text-[#4f443f]">
            Monday - Sunday: 8:00 AM - 8:00 PM
          </p>
          <p className="text-body-sm text-[#4f443f]">
            © {new Date().getFullYear()} El Jerid Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
