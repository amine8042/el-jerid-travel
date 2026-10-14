import React from 'react';
import { PageId, Excursion } from '../types';
import { EXCURSIONS, TESTIMONIALS, AGENCY_INFO } from '../data/travelData';
import { ArrowRight, MessageSquare, Car, Star } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onSelectExcursion: (excursion: Excursion) => void;
  onOpenBookingModal: (type?: 'excursion' | 'vehicle' | 'custom', item?: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectExcursion,
  onOpenBookingModal,
}) => {
  const featuredExcursions = [
    EXCURSIONS.find((e) => e.id === 'chebika-tamerza') || EXCURSIONS[1],
    EXCURSIONS.find((e) => e.id === 'canyon-mides') || EXCURSIONS[2],
    EXCURSIONS.find((e) => e.id === 'ong-jmel-chott') || EXCURSIONS[3],
  ];

  return (
    <div className="flex flex-col w-full bg-[#fcf9f3]">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center justify-center -mt-20 pt-20 px-4 sm:px-8 overflow-hidden">
        {/* Background Image with Dark Desert Scrim */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 scale-100 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBLxb41h3nouTyGvAwMYrGCfqw5dKzzFX0KsbwkFGqAkAjuba_vzUaiMKjY3Nn2VRfQIXkf_R5QxM37lfge2eSU2Q4yHvY6f4o7H7UXuKsYkImefkJVR86Hi-YXi8AvBcIj5cx9AUm0n2bcvgqOjJ5BM7SSxViwtlS01U2AuR7eg5aoY7k0loRUD9GkiJ2Qu7gBnw0Aca-HZ9P6PC7q7V3_1lt8hBY_kCGbNliGgvPRyL9fOE9jAXp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#392317]/90 via-[#392317]/40 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 py-24 px-4">
          <span className="label-md text-[#ffdbca] uppercase tracking-widest bg-[#392317]/50 backdrop-blur-md px-4 py-2 rounded-full border border-[#ffdbca]/25">
            Expeditions Exclusives • Tozeur, Tunisie
          </span>

          <h1 className="font-display-xl text-white max-w-4xl tracking-tight leading-tight text-4xl sm:text-6xl md:text-7xl font-light">
            Explorez la Magie du Sahara Tunisien
          </h1>

          <p className="font-body-lg text-[#f3f0ea] max-w-2xl font-light leading-relaxed text-base sm:text-lg">
            Aventures authentiques dans le désert, paysages à couper le souffle et voyages inoubliables avec des experts locaux.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('excursions')}
              className="w-full sm:w-auto px-8 py-4 bg-[#51382b] text-[#c4a190] hover:bg-[#974722] hover:text-white transition-all rounded-lg font-label-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer font-semibold"
            >
              <span>Découvrir nos Excursions</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => onOpenBookingModal('custom')}
              className="w-full sm:w-auto px-8 py-4 bg-[#fcf9f3]/15 hover:bg-[#fcf9f3]/25 text-white backdrop-blur-md border border-white/30 transition-all rounded-lg font-label-lg flex items-center justify-center gap-2 cursor-pointer font-semibold"
            >
              <span>Planifier votre Voyage</span>
              <MessageSquare size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="bg-[#ebe8e2] py-8 border-y border-[#d3c3bc]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1 text-[#392317]">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="font-headline-md text-[#392317] font-bold text-2xl sm:text-3xl">4.9 / 5</span>
            </div>
            <span className="text-body-sm text-[#4f443f]">Note Google Vérifiée</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-headline-md text-[#392317] font-bold text-2xl sm:text-3xl">35+</span>
            <span className="text-body-sm text-[#4f443f]">Avis Passionnés</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-headline-md text-[#392317] font-bold text-2xl sm:text-3xl">100%</span>
            <span className="text-body-sm text-[#4f443f]">Expertise Locale</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-headline-md text-[#392317] font-bold text-2xl sm:text-3xl">Sur Mesure</span>
            <span className="text-body-sm text-[#4f443f]">Expériences Exclusives</span>
          </div>
        </div>
      </section>

      {/* Featured Excursions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full" id="excursions">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="label-md text-[#974722] uppercase tracking-widest font-bold">
              Nos Itinéraires Phares
            </span>
            <h2 className="font-headline-lg text-[#392317] text-3xl sm:text-4xl">
              Les Merveilles du Jerid
            </h2>
          </div>
          <p className="text-body-md text-[#4f443f] max-w-md">
            Partez à la découverte des oasis suspendues, des canyons millénaires et des décors de cinéma au cœur du Grand Erg Oriental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredExcursions.map((excursion) => (
            <div
              key={excursion.id}
              className="group bg-[#f0eee8] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col border border-[#d3c3bc]/25"
            >
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => {
                  onSelectExcursion(excursion);
                  onNavigate('detail-excursion');
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${excursion.image}')` }}
                />
                <span className="absolute top-4 left-4 bg-[#fcf9f3]/90 backdrop-blur-md text-[#392317] text-label-md px-3 py-1 rounded-full font-semibold shadow-xs">
                  {excursion.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <h3
                    onClick={() => {
                      onSelectExcursion(excursion);
                      onNavigate('detail-excursion');
                    }}
                    className="font-headline-md text-[#392317] text-xl font-semibold hover:text-[#974722] transition-colors cursor-pointer"
                  >
                    {excursion.title}
                  </h3>
                  <p className="text-body-sm text-[#4f443f] line-clamp-3">
                    {excursion.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#d3c3bc]/30">
                  <span className="font-headline-sm text-[#974722] font-semibold">
                    Sur Devis
                  </span>
                  <a
                    href={AGENCY_INFO.whatsappUrl(`Bonjour, je souhaite réserver l'excursion ${excursion.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#392317] text-white hover:bg-[#974722] transition-colors rounded-lg text-label-md flex items-center gap-1.5 shadow-xs cursor-pointer font-medium"
                  >
                    <span>Réserver via WhatsApp</span>
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Car Rental Promotion Section */}
      <section className="bg-[#f6f3ed] py-20 my-8 border-y border-[#d3c3bc]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="label-md text-[#974722] uppercase tracking-widest font-bold">
              Mobilité & Liberté
            </span>
            <h2 className="font-headline-lg text-[#392317] text-3xl sm:text-4xl">
              Location de Voitures 4x4 & Berlines
            </h2>
            <p className="text-body-lg text-[#4f443f] leading-relaxed">
              Parcourez les routes du Sud tunisien à votre propre rythme. Nos véhicules récents, confortables et parfaitement entretenus sont prêts pour toutes vos escapades, de la ville aux pistes sablonneuses.
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-body-sm text-[#4f443f] uppercase tracking-wider">À partir de</span>
              <span className="font-display-lg text-[#392317] font-bold text-4xl sm:text-5xl">150 TND</span>
              <span className="text-body-md text-[#4f443f]">/ jour</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('location-de-voitures')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#392317] text-white hover:bg-[#974722] transition-colors rounded-lg font-label-lg shadow-md cursor-pointer font-semibold"
              >
                <span>Réserver un Véhicule</span>
                <Car size={18} />
              </button>

              <button
                onClick={() => onOpenBookingModal('vehicle')}
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#f0eee8] text-[#392317] hover:bg-[#ebe8e2] transition-colors rounded-lg font-label-lg border border-[#d3c3bc]/50 cursor-pointer font-medium"
              >
                <span>Voir les tarifs et disponibilités</span>
              </button>
            </div>
          </div>

          <div
            onClick={() => onNavigate('location-de-voitures')}
            className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-[#d3c3bc]/30 cursor-pointer group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsZRseTIroQlXql_Jf6eJPjZBWJP0kMjepdevP3sl3rJJ_TdJTVrv7GrmcDfdljrRh3Z8d197y4JXAh-M2fkjtM7WeQpxWpT6v5RkNKbDTZFxm2BJ8g_hxJGhb9XAUg0Bw4T2kHNKh3FyOK58UvU2oTPqxqTNqoxuBWpE-uZxHMAbOPvL-M4APkDqJ6fzwnQjQsppIkI0wtlD1e6EYLW9ODtGtucKXBGgGQBG2bwQaLNhwb5hmJifG')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#392317]/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-medium">
              Flotte 4x4 tout-terrain disponible à Tozeur
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-2">
          <span className="label-md text-[#974722] uppercase tracking-widest font-bold">
            Témoignages
          </span>
          <h2 className="font-headline-lg text-[#392317] text-3xl sm:text-4xl">
            Ce que disent nos voyageurs
          </h2>
          <p className="text-body-md text-[#4f443f]">
            Des souvenirs inoubliables partagés par des voyageurs du monde entier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#f0eee8] p-6 rounded-xl flex flex-col justify-between gap-6 shadow-xs border border-[#d3c3bc]/25"
            >
              <div className="flex flex-col gap-3">
                <div className="flex text-[#392317]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="material-symbols-outlined text-[18px] text-[#974722]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-body-md text-[#1c1c18] italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#d3c3bc]/30">
                <div className="w-10 h-10 rounded-full bg-[#51382b] text-[#ffdbca] flex items-center justify-center font-bold">
                  {t.avatarLetter}
                </div>
                <div>
                  <span className="font-bold text-body-md text-[#392317] block">
                    {t.name}
                  </span>
                  <span className="text-body-sm text-[#4f443f]">
                    {t.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
