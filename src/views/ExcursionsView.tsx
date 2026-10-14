import React, { useState, useMemo } from 'react';
import { Excursion, PageId } from '../types';
import { EXCURSIONS, AGENCY_INFO } from '../data/travelData';
import { MessageSquare, ArrowRight, Compass } from 'lucide-react';

interface ExcursionsViewProps {
  onSelectExcursion: (excursion: Excursion) => void;
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (type?: 'excursion' | 'vehicle' | 'custom', item?: any) => void;
}

export const ExcursionsView: React.FC<ExcursionsViewProps> = ({
  onSelectExcursion,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les voyages' },
    { id: 'aventures', label: 'Aventures Sahariennes' },
    { id: 'oasis', label: 'Oasis de Montagne' },
    { id: 'culturels', label: 'Circuits Culturels' },
    { id: '4x4', label: 'Expériences 4x4' },
    { id: 'prives', label: 'Circuits Privés' },
  ];

  const filteredExcursions = useMemo(() => {
    return EXCURSIONS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchDur = selectedDuration === 'all' || item.durationCategory === selectedDuration;
      return matchCat && matchDur;
    });
  }, [selectedCategory, selectedDuration]);

  return (
    <div className="flex flex-col w-full bg-[#fcf9f3]">
      {/* Hero / Intro Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full flex flex-col items-start gap-4">
        <div className="flex items-center gap-2 text-label-md uppercase tracking-widest text-[#392317] font-semibold">
          <span>Catalogue Exclusif</span>
          <span className="text-[#81746e]">/</span>
          <span>Expéditions Sahariennes</span>
        </div>

        <h1 className="font-display-lg text-[#392317] text-3xl sm:text-5xl md:text-6xl max-w-3xl leading-tight font-light">
          Voyage au cœur du silence et de l'immensité tunisienne.
        </h1>

        <p className="font-body-lg text-[#4f443f] max-w-2xl text-base sm:text-lg leading-relaxed">
          Laissez-vous guider à travers les dunes dorées, les oasis suspendues et les vestiges ancestraux du Grand Erg Oriental. Chaque itinéraire est une invitation intime à la contemplation et au grand frisson.
        </p>
      </section>

      {/* Interactive Filters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#d3c3bc]/30">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-label-lg transition-all cursor-pointer font-medium whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#392317] text-white shadow-sm'
                      : 'bg-[#f0eee8] text-[#1c1c18] hover:bg-[#ebe8e2]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Duration Filter Dropdown */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-label-md uppercase text-[#4f443f] tracking-wider font-semibold">
              Durée :
            </span>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="bg-[#f0eee8] text-[#1c1c18] px-4 py-2 rounded-xl text-body-sm focus:outline-none focus:ring-1 focus:ring-[#974722] border border-[#d3c3bc]/40 cursor-pointer font-medium"
            >
              <option value="all">Toutes durées</option>
              <option value="1-day">1 Journée</option>
              <option value="2-3-days">2 à 3 Jours</option>
              <option value="4plus">4 Jours et plus</option>
            </select>
          </div>
        </div>
      </section>

      {/* Excursions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
        {filteredExcursions.length === 0 ? (
          <div className="bg-[#f0eee8] rounded-2xl p-12 text-center flex flex-col items-center gap-4">
            <Compass size={40} className="text-[#81746e]" />
            <h3 className="font-headline-md text-xl text-[#392317]">Aucune excursion ne correspond à ces critères</h3>
            <p className="text-body-sm text-[#4f443f]">
              Essayez de réinitialiser vos filtres ou contactez notre équipe pour un itinéraire sur-mesure.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDuration('all');
              }}
              className="mt-2 px-5 py-2.5 rounded-lg bg-[#392317] text-white text-xs font-semibold hover:bg-[#974722] transition-colors cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExcursions.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-[#f0eee8] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all group border border-[#d3c3bc]/25"
              >
                {/* Image & Badges */}
                <div
                  className="relative w-full h-72 overflow-hidden cursor-pointer"
                  onClick={() => {
                    onSelectExcursion(item);
                    onNavigate('detail-excursion');
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#fcf9f3]/90 backdrop-blur-md px-3 py-1 rounded-full text-label-md text-[#392317] font-semibold shadow-xs">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#392317] text-white px-3 py-1 rounded-full text-label-md font-medium shadow-xs">
                    {item.durationTag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <h3
                      onClick={() => {
                        onSelectExcursion(item);
                        onNavigate('detail-excursion');
                      }}
                      className="font-headline-md text-[#392317] text-xl font-semibold hover:text-[#974722] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-[#4f443f] line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#d3c3bc]/30">
                    <div className="flex flex-col">
                      <span className="text-label-md text-[#81746e]">Tarif</span>
                      <span className="text-body-md font-bold text-[#392317]">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenBookingModal('excursion', item)}
                      className="flex items-center gap-1.5 bg-[#392317] text-white px-4 py-2.5 rounded-full text-label-lg hover:bg-[#974722] transition-colors cursor-pointer font-medium shadow-xs"
                    >
                      <MessageSquare size={16} />
                      <span>Demander ce voyage</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Custom Request Banner */}
      <section className="bg-[#f6f3ed] py-16 w-full border-t border-[#d3c3bc]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-label-md uppercase tracking-wider text-[#974722] font-bold">
              Sur-Mesure
            </span>
            <h2 className="font-headline-lg text-[#392317] text-2xl sm:text-3xl">
              Vous ne trouvez pas l'itinéraire idéal ?
            </h2>
            <p className="text-body-md text-[#4f443f]">
              Nos conseillers conçoivent pour vous des séjours exclusifs adaptés à vos exigences, vos dates et vos envies d'évasion.
            </p>
          </div>

          <a
            href={AGENCY_INFO.whatsappUrl('Bonjour, je souhaite créer un itinéraire sur-mesure avec El Jerid Travel.')}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#392317] text-white px-6 py-3.5 rounded-full text-label-lg hover:bg-[#974722] transition-colors shadow-md cursor-pointer font-semibold whitespace-nowrap"
          >
            <MessageSquare size={18} />
            <span>Créer mon voyage sur-mesure</span>
          </a>
        </div>
      </section>
    </div>
  );
};
