import React, { useState } from 'react';
import { PageId, Language } from '../types';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenUserModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  language,
  onLanguageChange,
  onOpenUserModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: PageId; label: string }> = [
    { id: 'accueil', label: language === 'FR' ? 'Accueil' : language === 'EN' ? 'Home' : 'Startseite' },
    { id: 'excursions', label: 'Excursions' },
    { id: 'detail-excursion', label: language === 'FR' ? 'Détail Excursion' : language === 'EN' ? 'Tour Details' : 'Ausflugsdetails' },
    { id: 'location-de-voitures', label: language === 'FR' ? 'Location de Voitures' : language === 'EN' ? 'Car Rental' : 'Mietwagen' },
    { id: 'a-propos', label: language === 'FR' ? 'À Propos' : language === 'EN' ? 'About Us' : 'Über Uns' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fcf9f3]/85 backdrop-blur-xl border-b border-[#81746e]/10 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('accueil')}
          className="font-headline-lg text-[#392317] tracking-tight hover:opacity-90 transition-opacity text-left cursor-pointer"
        >
          EL JERID TRAVEL
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all text-[15px] font-medium px-3.5 py-1.5 rounded-lg cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#51382b] text-[#c4a190] shadow-sm font-semibold'
                    : 'text-[#4f443f] hover:text-[#1c1c18] hover:bg-[#ebe8e2]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Language switcher, User profile, Mobile Menu */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#4f443f] tracking-wider">
            {(['FR', 'EN', 'DE'] as Language[]).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="text-[#81746e]/40">/</span>}
                <button
                  onClick={() => onLanguageChange(lang)}
                  className={`cursor-pointer transition-colors px-1 py-0.5 rounded ${
                    language === lang
                      ? 'text-[#392317] font-bold underline underline-offset-4 decoration-[#974722]'
                      : 'hover:text-[#392317]'
                  }`}
                >
                  {lang}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* User Profile Button */}
          <button
            onClick={onOpenUserModal}
            title="Espace Voyageur"
            className="w-8 h-8 rounded-full bg-[#392317] text-white flex items-center justify-center hover:bg-[#974722] transition-colors shadow-sm cursor-pointer"
          >
            <User size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#392317] hover:bg-[#ebe8e2] transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fcf9f3] border-b border-[#d3c3bc]/40 px-6 py-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#51382b] text-[#c4a190] font-semibold'
                      : 'text-[#4f443f] hover:bg-[#f0eee8]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
