/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Language, Excursion } from './types';
import { EXCURSIONS } from './data/travelData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { UserModal } from './components/UserModal';

import { HomeView } from './views/HomeView';
import { ExcursionsView } from './views/ExcursionsView';
import { DetailExcursionView } from './views/DetailExcursionView';
import { CarRentalView } from './views/CarRentalView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('accueil');
  const [language, setLanguage] = useState<Language>('FR');
  const [selectedExcursion, setSelectedExcursion] = useState<Excursion>(EXCURSIONS[0]);

  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingModalType, setBookingModalType] = useState<'excursion' | 'vehicle' | 'custom'>('excursion');
  const [bookingModalItem, setBookingModalItem] = useState<any>(null);
  const [userModalOpen, setUserModalOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenBooking = (type: 'excursion' | 'vehicle' | 'custom' = 'excursion', item?: any) => {
    setBookingModalType(type);
    setBookingModalItem(item || null);
    setBookingModalOpen(true);
  };

  const handleSelectExcursion = (excursion: Excursion) => {
    setSelectedExcursion(excursion);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f3] text-[#1c1c18] font-sans">
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
        onOpenUserModal={() => setUserModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full pt-20">
        {currentPage === 'accueil' && (
          <HomeView
            onNavigate={setCurrentPage}
            onSelectExcursion={handleSelectExcursion}
            onOpenBookingModal={handleOpenBooking}
          />
        )}

        {currentPage === 'excursions' && (
          <ExcursionsView
            onSelectExcursion={handleSelectExcursion}
            onNavigate={setCurrentPage}
            onOpenBookingModal={handleOpenBooking}
          />
        )}

        {currentPage === 'detail-excursion' && (
          <DetailExcursionView
            excursion={selectedExcursion}
            onSelectExcursion={handleSelectExcursion}
            onNavigate={setCurrentPage}
            onOpenBookingModal={handleOpenBooking}
          />
        )}

        {currentPage === 'location-de-voitures' && (
          <CarRentalView onOpenBookingModal={handleOpenBooking} />
        )}

        {currentPage === 'a-propos' && (
          <AboutView onNavigate={setCurrentPage} />
        )}

        {currentPage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={setCurrentPage} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Booking / Custom Trip Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialType={bookingModalType}
        initialItem={bookingModalItem}
      />

      {/* User Traveler Space Modal */}
      <UserModal
        isOpen={userModalOpen}
        onClose={() => setUserModalOpen(false)}
        onNavigateToBooking={() => handleOpenBooking('custom')}
      />
    </div>
  );
}
