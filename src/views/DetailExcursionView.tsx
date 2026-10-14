import React, { useState } from 'react';
import { Excursion, PageId } from '../types';
import { EXCURSIONS, AGENCY_INFO } from '../data/travelData';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  MessageSquare,
  ChevronDown
} from 'lucide-react';

interface DetailExcursionViewProps {
  excursion: Excursion;
  onSelectExcursion: (excursion: Excursion) => void;
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (type?: 'excursion' | 'vehicle' | 'custom', item?: any) => void;
}

export const DetailExcursionView: React.FC<DetailExcursionViewProps> = ({
  excursion,
  onSelectExcursion,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Default gallery fallback if excursion has custom or default gallery
  const defaultGallery = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDeqWc8j035nISFgEB_0HnCjlyKiys2-0YMrRExDNNz_OfsYX_1yY_JcZNII6kDTlJik9v--e8n0CQTKxLWxs2CNmapLulTeV6j0f9meyZogry-9M8tq_uqogJajle4ywNgtsZUNkhQNgbLJgQSn7DXBGJDjgUTrV70_u13e1B1B4SPKuLbj70CCaVi-SyFPQTx-p1jwEEekifcLXzL3jtCH4Is2YZU-w0ozIC38NYSK0Yve0Mbr2F_',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD2o2dCx-1X1pDeUaTj3GpHTOLaXzz3O3HbIqmCcg8ljygQSrJAqZeX7j7XCEcbdna2E86vCVzA46McOhrVvBcl3AujxZKicjHEywfHvICoDntjdixmkBXyJuTjrU-Qq5CtXMTqvEj35oAvJkP8AD8x_bgdCBUwE4cIGYNzov1vgVWtLIfEnf9TaPr53XNNNT0pW_I3SqhYsgrnPYAvWVaT3KbOHCjpqu-ROl9V05T6P8O4K7r7X-GT',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCFEvVJqnI0HINQGjulq8Ed4rYehYYpYsaMHcrTiY20eG_Z35CzqGAUkcf5QrtDs1DWltx0LA4EiXS9wkuE8L2CEP1brCYrfqLNMSpHKNgEKANL1qfPeKKZYEcfIPRoLGRLAvdITmo1D4wgB6DkydlV3sP2BpdWbsZHej_J4CGYntQn1CpPCIp51mJxUzr4rcSzb29ziAkxYFMUpHWYT8-C0gkC7ezItiQVIKSLl8ojB8jyKn3jITb0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBCBvDNrNJVmuqzbkWZaGOMVhsJsGNbzvPOBChQU39xoTTj57H5O55mobYCb5ZJfcwi9xQy45KGH3UpyS0ZbMwO8W2XGHU-gXHvfvJ35duC5aJnjvvr-gzFRleb4BvhmC7SzDR2m8oA9akS88OukaxBggObJtL3Wmesp2P-1Kpi10GEfDtRGZ-THCB6Ewnx3y5zvMIuQjA2aXSzb3CICUswR4X_SztJhoxXS0YckRHKmMkCa8PVVQ2a'
  ];

  const gallery = excursion.gallery && excursion.gallery.length >= 4 ? excursion.gallery : defaultGallery;

  const currentHighlights = excursion.highlights || [
    { icon: 'landscape', title: 'Chott el-Djerid', description: 'Traversée du plus grand lac salé du Sahara et observation des mirages légendaires.' },
    { icon: 'nights_stay', title: 'Bivouac de Luxe', description: 'Nuit sous tente saharienne tout confort avec dîner traditionnel au feu de bois et observation des étoiles.' },
    { icon: 'terrain', title: 'Oasis de Montagne', description: 'Visite des cascades et canyons suspendus de Chebika, Tamerza et Mides.' },
    { icon: 'movie', title: 'Canyon de Star Wars', description: 'Exploration des décors mythiques de tournage au cœur des dunes de sable fin.' }
  ];

  const currentItinerary = excursion.itinerary || [
    {
      day: 'Jour 1',
      title: 'De Tozeur aux Oasis de Montagne et Coucher de Soleil sur les Dunes',
      description: 'Départ à 08:00 en véhicule 4x4 climatisé depuis votre hôtel ou le point de rendez-vous. Route vers les oasis de montagne spectaculaires : Chebika et sa source d\'eau vive, Tamerza et ses impressionnantes cascades, puis les gorges de Mides. Déjeuner dans un restaurant local. L\'après-midi, traversée des pistes sahariennes pour atteindre le campement au pied des grandes dunes de Ksar Ghilane ou Zmela. Ascensions d\'une dune pour admirer le coucher de soleil flamboyant. Dîner traditionnel autour du feu de camp et nuit sous tente berbère de luxe.'
    },
    {
      day: 'Jour 2',
      title: 'Chott el-Djerid, Mos Espa et Retour à Tozeur',
      description: 'Réveil matinal conseillé pour assister au lever du soleil sur le désert. Petit-déjeuner buffet au campement. Départ en 4x4 à travers les étendues mystiques du Chott el-Djerid, arrêt photos aux sculptures de sel. Continuation vers les décors de cinéma de Mos Espa perdus dans les dunes. Temps libre pour explorer le site. Déjeuner dans une palmeraie traditionnelle à Tozeur avant le retour en fin d\'après-midi vers 17:00.'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#fcf9f3]">
      {/* Excursion Switcher Sub-header for User Convenience */}
      <div className="bg-[#f0eee8] border-b border-[#d3c3bc]/30 px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-[#4f443f]">
          <span className="font-semibold text-[#392317]">Voir un autre itinéraire :</span>
          <div className="flex flex-wrap items-center gap-2">
            {EXCURSIONS.map((e) => (
              <button
                key={e.id}
                onClick={() => onSelectExcursion(e)}
                className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                  e.id === excursion.id
                    ? 'bg-[#392317] text-[#ffdbca] font-semibold'
                    : 'bg-[#fcf9f3] hover:bg-[#ebe8e2] text-[#1c1c18]'
                }`}
              >
                {e.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero / Header Section */}
      <section className="relative w-full h-[716px] min-h-[500px] flex items-end pb-16 bg-cover bg-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-100"
          style={{ backgroundImage: `url('${excursion.image}')` }}
        />
        {/* Gradient Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#392317]/95 via-[#392317]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-[#f0eee8] px-3.5 py-1 rounded-full text-label-md text-[#392317] font-semibold uppercase tracking-wider shadow-sm">
                {excursion.tag || 'Expédition Phare'}
              </span>
              <span className="text-[#c4a190] text-label-lg flex items-center gap-1.5 font-medium">
                <Clock size={16} /> {excursion.durationTag}
              </span>
            </div>

            <h1 className="font-display-lg text-white text-3xl sm:text-5xl md:text-6xl tracking-tight font-light leading-tight">
              {excursion.title}
            </h1>

            <p className="text-body-lg text-[#ffdbcd] max-w-xl text-base sm:text-lg leading-relaxed font-light">
              {excursion.description}
            </p>
          </div>

          {/* Quick Action / Price Box */}
          <div className="bg-[#fcf9f3]/95 backdrop-blur-md p-6 rounded-xl shadow-xl flex flex-col gap-3 border border-[#d3c3bc]/30 min-w-[280px]">
            <div className="flex justify-between items-baseline">
              <span className="text-body-sm text-[#4f443f] uppercase tracking-wider font-semibold">À partir de</span>
              <span className="font-headline-lg text-[#392317] font-bold text-3xl">{excursion.price}</span>
            </div>
            <span className="text-body-sm text-[#81746e]">Par personne (Tout compris)</span>
            <a
              href={AGENCY_INFO.whatsappUrl(`Bonjour, je souhaite réserver ou obtenir des informations sur l'excursion ${excursion.title}.`)}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#974722] hover:bg-[#392317] text-white py-3.5 px-4 rounded-lg font-label-lg transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer font-semibold"
            >
              <MessageSquare size={18} />
              <span>Réserver via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Overview, Highlights, Itinerary, Gallery */}
        <div className="lg:col-span-8 flex flex-col gap-14">
          {/* Overview */}
          <div className="flex flex-col gap-4">
            <span className="label-md text-[#974722] uppercase tracking-widest font-bold">
              Aperçu de l'Expédition
            </span>
            <h2 className="font-headline-lg text-[#392317] text-2xl sm:text-3xl">
              L'essence du désert tunisien dans un confort absolu
            </h2>
            <p className="text-body-lg text-[#4f443f] leading-relaxed text-base sm:text-lg">
              {excursion.overview || excursion.description}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() => setSelectedPhoto(gallery[0])}
              className="md:col-span-2 h-80 rounded-xl bg-cover bg-center shadow-xs cursor-pointer hover:opacity-95 transition-opacity overflow-hidden"
              style={{ backgroundImage: `url('${gallery[0]}')` }}
            />
            <div
              onClick={() => setSelectedPhoto(gallery[1])}
              className="h-80 rounded-xl bg-cover bg-center shadow-xs cursor-pointer hover:opacity-95 transition-opacity overflow-hidden"
              style={{ backgroundImage: `url('${gallery[1]}')` }}
            />
            <div
              onClick={() => setSelectedPhoto(gallery[2])}
              className="h-64 rounded-xl bg-cover bg-center shadow-xs cursor-pointer hover:opacity-95 transition-opacity overflow-hidden"
              style={{ backgroundImage: `url('${gallery[2]}')` }}
            />
            <div
              onClick={() => setSelectedPhoto(gallery[3])}
              className="md:col-span-2 h-64 rounded-xl bg-cover bg-center shadow-xs cursor-pointer hover:opacity-95 transition-opacity overflow-hidden"
              style={{ backgroundImage: `url('${gallery[3]}')` }}
            />
          </div>

          {/* Highlights */}
          <div className="bg-[#f6f3ed] p-8 sm:p-10 rounded-xl flex flex-col gap-6 border border-[#d3c3bc]/25">
            <span className="label-md text-[#974722] uppercase tracking-widest font-bold">
              Points Forts
            </span>
            <h3 className="font-headline-md text-[#392317] text-2xl">
              Ce qui rend cette excursion unique
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              {currentHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#974722] text-[26px] shrink-0 mt-0.5">
                    {hl.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-[#1c1c18] text-base">{hl.title}</h4>
                    <p className="text-body-sm text-[#4f443f] mt-1">{hl.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary Timeline */}
          <div className="flex flex-col gap-6">
            <span className="label-md text-[#974722] uppercase tracking-widest font-bold">
              Programme Détaillé
            </span>
            <h3 className="font-headline-lg text-[#392317] text-2xl sm:text-3xl">
              Itinéraire Jour par Jour
            </h3>

            <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#d3c3bc]">
              {currentItinerary.map((step, idx) => (
                <div key={idx} className="relative flex flex-col gap-2">
                  <div className="absolute -left-8 w-6 h-6 rounded-full bg-[#974722] ring-4 ring-[#fcf9f3] flex items-center justify-center text-[10px] text-white font-bold">
                    {idx + 1}
                  </div>
                  <span className="label-lg text-[#974722] font-semibold">{step.day}</span>
                  <h4 className="font-headline-md text-[#392317] text-xl font-medium">
                    {step.title}
                  </h4>
                  <p className="text-body-md text-[#4f443f] leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Practical Info & Sticky Booking Card */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Practical Information Card */}
          <div className="bg-[#ebe8e2] p-6 rounded-xl flex flex-col gap-6 shadow-xs border border-[#d3c3bc]/30">
            <h3 className="font-headline-sm text-[#392317] font-semibold text-xl">
              Informations Pratiques
            </h3>
            <div className="flex flex-col gap-4 text-body-sm text-[#4f443f]">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#974722] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1c1c18]">Durée :</strong> {excursion.durationTag}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#974722] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1c1c18]">Point de rendez-vous :</strong> {excursion.meetingPoint || 'Zone Touristique, Tozeur 2210'}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users size={18} className="text-[#974722] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1c1c18]">Capacité :</strong> {excursion.capacity || '2 à 6 personnes par 4x4 (Privatisable)'}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1c1c18]">Inclus :</strong> Transport 4x4, chauffeur-guide, pension complète, nuit en campement.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle size={18} className="text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1c1c18]">Non inclus :</strong> Boissons personnelles, pourboires.
                </div>
              </div>
            </div>
          </div>

          {/* Agency Confirmation Notes */}
          <div className="bg-[#51382b] text-[#c4a190] p-6 rounded-xl flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck size={22} className="text-[#ffb597]" />
              <h4 className="font-headline-sm text-white font-semibold text-lg">Confirmation & Sécurité</h4>
            </div>
            <p className="text-body-sm text-[#f3f0ea]/90 leading-relaxed text-xs sm:text-sm">
              Toutes nos excursions sont encadrées par des chauffeurs-guides professionnels agréés par l'Office National du Tourisme Tunisien. Les véhicules 4x4 font l'objet de contrôles techniques rigoureux avant chaque départ. Annulation gratuite jusqu'à 48 heures avant l'excursion.
            </p>
          </div>

          {/* Floating / Sticky WhatsApp CTA Box */}
          <div className="bg-[#f6f3ed] p-6 rounded-xl flex flex-col gap-4 border border-[#d3c3bc]/40 sticky top-28 shadow-md">
            <span className="label-md text-[#974722] uppercase tracking-widest font-bold">
              Réservation Directe
            </span>
            <h4 className="font-headline-md text-[#392317] text-xl font-medium">Discutez avec notre expert</h4>
            <p className="text-body-sm text-[#4f443f]">
              Une question sur les disponibilités ou les options sur mesure ? Contactez-nous instantanément sur WhatsApp.
            </p>
            <a
              href={AGENCY_INFO.whatsappUrl(`Bonjour, je souhaite réserver ou obtenir des informations sur le ${excursion.title}.`)}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#974722] hover:bg-[#392317] text-white py-3.5 px-4 rounded-lg font-label-lg transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer font-semibold"
            >
              <MessageSquare size={18} />
              <span>Message WhatsApp Pré-rempli</span>
            </a>
            <button
              onClick={() => onOpenBookingModal('excursion', excursion)}
              className="w-full bg-[#392317] hover:bg-[#51382b] text-white py-3 px-4 rounded-lg font-label-lg transition-colors text-center cursor-pointer font-medium"
            >
              <span>Envoyer une demande en ligne</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox / Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={selectedPhoto}
            alt="Excursion Preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
