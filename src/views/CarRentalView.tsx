import React, { useState } from 'react';
import { VEHICLES, AGENCY_INFO } from '../data/travelData';
import { Vehicle } from '../types';
import {
  Calendar,
  MapPin,
  Car,
  Search,
  CheckCircle,
  Shield,
  Plane,
  MessageSquare,
  Settings,
  Users,
  Wind,
  Fuel,
  Zap
} from 'lucide-react';

interface CarRentalViewProps {
  onOpenBookingModal: (type?: 'excursion' | 'vehicle' | 'custom', item?: any) => void;
}

export const CarRentalView: React.FC<CarRentalViewProps> = ({ onOpenBookingModal }) => {
  const [pickupLocation, setPickupLocation] = useState('Aéroport Tozeur-Nefta (TOE)');
  const [datesRange, setDatesRange] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | '4x4' | 'suv' | 'sedan'>('all');

  const filteredVehicles = VEHICLES.filter((v) => {
    if (selectedCategory === 'all') return true;
    return v.category === selectedCategory;
  });

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ac_unit':
        return <Wind size={18} className="text-[#974722]" />;
      case 'local_gas_station':
        return <Fuel size={18} className="text-[#974722]" />;
      case 'bolt':
        return <Zap size={18} className="text-[#974722]" />;
      default:
        return <CheckCircle size={18} className="text-[#974722]" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#fcf9f3]">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center bg-[#392317] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdsKt51JJI3XQ9M_tVB5aRnF1GKfv_eUF_ILjkHVFZT5PbqwU3i0DBZSp5rP_n1vqbsqOT2z-mDyAGST1BfFEPNOsGnAztnH2XV9O9dJh2sbUcJrMU96Gx6iPd0zISBk7AxoqiY1Bv1SygA64Tb5E--ryW4-IZSPyr9GtxbgdWW9aZ4sZUYw-jaz15PDDJBzZY10WStO6otl8GXdcXFZnH9lYQxfadz5MPti3lI0QW3tk03h3GLJnu')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f3] via-transparent to-[#392317]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 pt-12">
          <span className="label-lg text-[#ffdbcd] tracking-widest uppercase bg-[#fcf9f3]/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
            Évasion & Liberté
          </span>
          <h1 className="font-display-xl text-white max-w-4xl leading-tight text-3xl sm:text-5xl md:text-6xl font-light">
            Location de Voitures d'Exception à Tozeur
          </h1>
          <p className="font-body-lg text-[#ebe8e2] max-w-2xl text-base sm:text-lg leading-relaxed font-light">
            Parcourez les pistes du Grand Erg Oriental et les oasis de Tozeur au volant de véhicules rigoureusement sélectionnés pour votre confort et votre sécurité.
          </p>
        </div>
      </section>

      {/* Search & Inquiry Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-20 w-full">
        <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-10 shadow-xl border border-[#d3c3bc]/30 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-6 border-b border-[#d3c3bc]/25 gap-4">
            <div>
              <span className="label-md text-[#974722] uppercase tracking-widest block mb-1 font-bold">
                Réservation sur mesure
              </span>
              <h2 className="font-headline-lg text-[#392317] text-2xl sm:text-3xl">
                Configurez votre voyage
              </h2>
            </div>
            <div className="text-left md:text-right">
              <p className="font-body-sm text-[#4f443f]">
                Location de voitures à partir de <strong className="text-[#392317] font-bold">150 TND / jour</strong>
              </p>
              <span className="text-[11px] block italic text-[#81746e]">(à confirmer avec l'agence)</span>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end"
          >
            {/* Pickup Location */}
            <div className="flex flex-col gap-2">
              <label className="label-lg text-[#1c1c18] font-medium">Lieu de prise en charge</label>
              <div className="relative">
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-[#f6f3ed] px-4 py-3 rounded-lg text-body-md text-[#1c1c18] border border-[#d3c3bc]/40 focus:ring-2 focus:ring-[#974722] outline-none cursor-pointer appearance-none font-medium pr-10"
                >
                  <option value="Aéroport Tozeur-Nefta (TOE)">Aéroport Tozeur-Nefta (TOE)</option>
                  <option value="Centre-ville Tozeur (Agence)">Centre-ville Tozeur (Agence)</option>
                  <option value="Hôtel Partenaire (Tozeur)">Hôtel Partenaire (Tozeur)</option>
                  <option value="Gare de Tozeur">Gare de Tozeur</option>
                </select>
                <MapPin size={18} className="absolute right-3.5 top-3.5 text-[#81746e] pointer-events-none" />
              </div>
            </div>

            {/* Rental Dates */}
            <div className="flex flex-col gap-2">
              <label className="label-lg text-[#1c1c18] font-medium">Dates de location</label>
              <div className="flex items-center gap-2 bg-[#f6f3ed] px-4 py-3 rounded-lg text-body-md text-[#1c1c18] border border-[#d3c3bc]/40">
                <Calendar size={18} className="text-[#81746e] shrink-0" />
                <input
                  type="text"
                  value={datesRange}
                  onChange={(e) => setDatesRange(e.target.value)}
                  placeholder="Du JJ/MM au JJ/MM"
                  className="bg-transparent border-0 outline-none w-full text-[#1c1c18] placeholder:text-[#81746e] text-sm"
                />
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="label-lg text-[#1c1c18] font-medium">Catégorie de Véhicule</label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as any)}
                  className="w-full bg-[#f6f3ed] px-4 py-3 rounded-lg text-body-md text-[#1c1c18] border border-[#d3c3bc]/40 focus:ring-2 focus:ring-[#974722] outline-none cursor-pointer appearance-none font-medium pr-10"
                >
                  <option value="all">Tous les véhicules ({VEHICLES.length})</option>
                  <option value="4x4">4x4 & Tout-Terrain (Land Cruiser)</option>
                  <option value="suv">SUV / Crossover (Dacia Duster)</option>
                  <option value="sedan">Berline Urbaine (Renault Clio)</option>
                </select>
                <Car size={18} className="absolute right-3.5 top-3.5 text-[#81746e] pointer-events-none" />
              </div>
            </div>

            {/* Submit / Filter Button */}
            <div>
              <button
                type="button"
                onClick={() => {
                  onOpenBookingModal('vehicle', {
                    pickupLocation,
                    datesRange,
                    category: selectedCategory
                  });
                }}
                className="w-full bg-[#392317] text-white py-3.5 px-6 rounded-lg font-label-lg hover:bg-[#974722] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer font-semibold"
              >
                <Search size={18} />
                <span>Vérifier & Réserver</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="label-md text-[#974722] uppercase tracking-widest block mb-2 font-bold">
            Notre Flotte
          </span>
          <h2 className="font-headline-lg text-[#392317] text-3xl sm:text-4xl mb-3">
            Des véhicules adaptés à chaque aventure
          </h2>
          <p className="font-body-md text-[#4f443f]">
            Du franchissement des dunes du Sahara aux balades dans les palmeraies, nos véhicules sont révisés et préparés pour garantir une sérénité absolue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((veh) => (
            <div
              key={veh.id}
              className="bg-[#f6f3ed] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col border border-[#d3c3bc]/30 group"
            >
              {/* Image & Badges */}
              <div className="relative h-72 bg-cover bg-center overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${veh.image}')` }}
                />
                <div className="absolute top-4 right-4 bg-[#392317]/90 text-white px-3 py-1 rounded-full text-label-md font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                  {veh.badgeTag}
                </div>
                <div className="absolute inset-0 bg-[#392317]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#fcf9f3] text-[#392317] px-4 py-2 rounded-lg font-label-lg shadow-lg font-semibold text-xs">
                    {veh.badge}
                  </span>
                </div>
              </div>

              {/* Vehicle Specs & Action */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-[#392317] text-xl font-semibold">
                      {veh.name}
                    </h3>
                    <span className="font-bold text-[#974722] text-lg">
                      {veh.pricePerDay} TND <span className="text-xs font-normal text-[#81746e]">/ jour</span>
                    </span>
                  </div>

                  <p className="text-body-sm text-[#4f443f] mb-6 line-clamp-3">
                    {veh.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#d3c3bc]/30 text-center">
                    <div className="flex flex-col items-center">
                      <Settings size={18} className="text-[#974722]" />
                      <span className="text-body-sm font-bold text-[#1c1c18] mt-1">{veh.transmission}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Users size={18} className="text-[#974722]" />
                      <span className="text-body-sm font-bold text-[#1c1c18] mt-1">{veh.seats} Places</span>
                    </div>

                    <div className="flex flex-col items-center">
                      {getFeatureIcon(veh.feature3Icon)}
                      <span className="text-body-sm font-bold text-[#1c1c18] mt-1">{veh.feature3}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={AGENCY_INFO.whatsappUrl(`Bonjour, je souhaite réserver ou vérifier la disponibilité du véhicule ${veh.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#392317] text-white py-3 px-4 rounded-lg font-label-lg text-center hover:bg-[#974722] transition-colors flex items-center justify-center gap-2 cursor-pointer font-semibold shadow-xs"
                  >
                    <MessageSquare size={16} />
                    <span>Réserver via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explanations & Conditions Section */}
      <section className="bg-[#f6f3ed] py-20 mb-16 border-y border-[#d3c3bc]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="label-md text-[#974722] uppercase tracking-widest block mb-2 font-bold">
                Transparence & Sérénité
              </span>
              <h2 className="font-headline-lg text-[#392317] text-3xl sm:text-4xl">
                Informations importantes et conditions de location
              </h2>
            </div>

            <p className="text-body-md text-[#4f443f] leading-relaxed">
              Chez El Jerid Travel, nous veillons à ce que votre expérience de location soit fluide, sécurisée et sans mauvaise surprise. Chaque contrat est établi sur mesure selon vos besoins de parcours.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffdbcd] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={20} className="text-[#974722]" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-[#392317] font-semibold text-lg">Disponibilité et Confirmation</h4>
                  <p className="text-body-sm text-[#4f443f] mt-1">
                    Les tarifs débutent à 150 TND / jour. Veuillez contacter directement notre agence pour vérifier la disponibilité en temps réel selon vos dates exactes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffdbcd] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield size={20} className="text-[#974722]" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-[#392317] font-semibold text-lg">Assurance & Garanties</h4>
                  <p className="text-body-sm text-[#4f443f] mt-1">
                    Tous nos véhicules disposent d'une assurance tous risques avec franchise. Des options de couverture étendue sont disponibles sur demande.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffdbcd] flex items-center justify-center shrink-0 mt-0.5">
                  <Plane size={20} className="text-[#974722]" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-[#392317] font-semibold text-lg">Livraison Aéroport & Hôtel</h4>
                  <p className="text-body-sm text-[#4f443f] mt-1">
                    Nous assurons la mise à disposition gratuite ou le transfert du véhicule directement à l'Aéroport International de Tozeur-Nefta ou à votre hôtel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Help Card */}
          <div className="bg-[#ffffff] p-8 sm:p-10 rounded-2xl shadow-md border border-[#d3c3bc]/30 flex flex-col gap-6">
            <h3 className="font-headline-md text-[#392317] text-2xl font-semibold">
              Besoin d'un accompagnement personnalisé ?
            </h3>
            <p className="text-body-md text-[#4f443f] leading-relaxed">
              Pour les expéditions hors des sentiers battus dans le désert profond (Ksar Ghilane, Douz, Tembaine), nous recommandons vivement la location de notre flotte 4x4 avec ou sans chauffeur expérimenté.
            </p>

            <div className="p-4 bg-[#f0eee8] rounded-xl flex flex-col gap-1.5 border border-[#d3c3bc]/30">
              <span className="label-md text-[#974722] uppercase font-bold">Contact direct agence</span>
              <p className="text-body-sm text-[#1c1c18]">Zone Touristique, Tozeur 2210, Tunisie</p>
              <p className="text-body-sm text-[#392317] font-bold">Téléphone / WhatsApp : +216 55 454 406</p>
            </div>

            <a
              href={AGENCY_INFO.whatsappUrl("Bonjour, je souhaite obtenir plus d'informations sur la location de véhicules 4x4 et berlines.")}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#974722] text-white py-4 px-6 rounded-lg font-label-lg hover:bg-[#392317] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer font-semibold"
            >
              <MessageSquare size={18} />
              <span>Discuter avec un conseiller sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
