import React, { useState } from 'react';
import { X, Calendar, Users, Check, MessageSquare, Car, Compass } from 'lucide-react';
import { EXCURSIONS, VEHICLES, AGENCY_INFO } from '../data/travelData';
import { Excursion, Vehicle } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'excursion' | 'vehicle' | 'custom';
  initialItem?: Excursion | Vehicle | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'excursion',
  initialItem = null,
}) => {
  const [bookingType, setBookingType] = useState<'excursion' | 'vehicle' | 'custom'>(initialType);
  const [selectedExcursionId, setSelectedExcursionId] = useState<string>(
    initialType === 'excursion' && initialItem ? initialItem.id : EXCURSIONS[0].id
  );
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(
    initialType === 'vehicle' && initialItem ? initialItem.id : VEHICLES[0].id
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();
    const ref = `EJT-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);

    let subject = '';
    if (bookingType === 'excursion') {
      const exc = EXCURSIONS.find((e) => e.id === selectedExcursionId);
      subject = `Excursion : ${exc?.title || 'Expédition'}`;
    } else if (bookingType === 'vehicle') {
      const veh = VEHICLES.find((v) => v.id === selectedVehicleId);
      subject = `Location : ${veh?.name || 'Véhicule'}`;
    } else {
      subject = 'Séjour Sur-Mesure Jerid';
    }

    const message = `Bonjour El Jerid Travel,\n\nJe souhaite effectuer une réservation :\n- Réf: ${ref}\n- Type: ${subject}\n- Nom: ${name || 'Voyageur'}\n- Téléphone: ${phone || 'Non renseigné'}\n- Email: ${email || 'Non renseigné'}\n- Date souhaitée: ${date || 'À déterminer'}\n- Personnes: ${guests}\n- Notes: ${notes || 'Aucune'}\n\nMerci de me recontacter pour la confirmation.`;

    if (viaWhatsApp) {
      window.open(AGENCY_INFO.whatsappUrl(message), '_blank');
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#fcf9f3] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#d3c3bc]/50 p-6 md:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#81746e] hover:bg-[#ebe8e2] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-inner">
              <Check size={32} />
            </div>
            <span className="label-md text-[#974722] uppercase tracking-wider font-bold">Demande Enregistrée</span>
            <h3 className="font-headline-lg text-[#392317] text-2xl">Merci pour votre confiance</h3>
            <p className="text-body-md text-[#4f443f] max-w-md">
              Votre dossier de voyage <strong className="text-[#392317]">#{bookingRef}</strong> a été transmis à notre équipe de Tozeur. Un conseiller vous répondra sous 2 heures avec les disponibilités et le devis final.
            </p>
            <div className="p-4 bg-[#f0eee8] rounded-xl text-left w-full text-xs text-[#4f443f] space-y-1 my-2">
              <p><strong>Agence :</strong> El Jerid Travel - Zone Touristique, Tozeur</p>
              <p><strong>Assistance 24/7 :</strong> +216 55 454 406</p>
            </div>
            <div className="flex gap-3 mt-2 w-full">
              <button
                onClick={resetForm}
                className="flex-1 py-3 px-4 rounded-lg bg-[#392317] text-white font-medium hover:bg-[#974722] transition-colors cursor-pointer"
              >
                Fermer
              </button>
              <a
                href={AGENCY_INFO.whatsappUrl(`Bonjour, je fais le suivi de ma demande ${bookingRef}.`)}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-lg bg-[#974722] text-white font-medium hover:bg-[#392317] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Ouvrir WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="label-md text-[#974722] uppercase tracking-widest font-bold block mb-1">
                Réservation Directe
              </span>
              <h3 className="font-headline-md text-[#392317] text-2xl">Planifier Votre Expérience</h3>
              <p className="text-body-sm text-[#4f443f] mt-1">
                Choisissez votre aventure et recevez une proposition personnalisée sans engagement.
              </p>
            </div>

            {/* Type selector */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-[#f0eee8] rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setBookingType('excursion')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  bookingType === 'excursion' ? 'bg-[#51382b] text-white shadow-xs' : 'text-[#4f443f] hover:text-[#1c1c18]'
                }`}
              >
                <Compass size={14} />
                <span>Excursion</span>
              </button>
              <button
                type="button"
                onClick={() => setBookingType('vehicle')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  bookingType === 'vehicle' ? 'bg-[#51382b] text-white shadow-xs' : 'text-[#4f443f] hover:text-[#1c1c18]'
                }`}
              >
                <Car size={14} />
                <span>Location 4x4</span>
              </button>
              <button
                type="button"
                onClick={() => setBookingType('custom')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  bookingType === 'custom' ? 'bg-[#51382b] text-white shadow-xs' : 'text-[#4f443f] hover:text-[#1c1c18]'
                }`}
              >
                <span>Sur-Mesure</span>
              </button>
            </div>

            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              {/* Conditional Item Select */}
              {bookingType === 'excursion' && (
                <div>
                  <label className="label-md text-[#392317] block mb-1">Choisir l'excursion</label>
                  <select
                    value={selectedExcursionId}
                    onChange={(e) => setSelectedExcursionId(e.target.value)}
                    className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/60 rounded-lg px-3 py-2.5 text-sm text-[#1c1c18] outline-none focus:border-[#974722]"
                  >
                    {EXCURSIONS.map((exc) => (
                      <option key={exc.id} value={exc.id}>
                        {exc.title} ({exc.durationTag} - {exc.price})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {bookingType === 'vehicle' && (
                <div>
                  <label className="label-md text-[#392317] block mb-1">Choisir le véhicule</label>
                  <select
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/60 rounded-lg px-3 py-2.5 text-sm text-[#1c1c18] outline-none focus:border-[#974722]"
                  >
                    {VEHICLES.map((veh) => (
                      <option key={veh.id} value={veh.id}>
                        {veh.name} ({veh.pricePerDay} TND / jour - {veh.transmission})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label-md text-[#392317] block mb-1">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/60 rounded-lg px-3 py-2 text-sm text-[#1c1c18] outline-none focus:border-[#974722]"
                  />
                </div>
                <div>
                  <label className="label-md text-[#392317] block mb-1">Téléphone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 12 34 56 78"
                    className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/60 rounded-lg px-3 py-2 text-sm text-[#1c1c18] outline-none focus:border-[#974722]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label-md text-[#392317] block mb-1 flex items-center gap-1">
                    <Calendar size={14} className="text-[#974722]" /> Date souhaitée
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/60 rounded-lg px-3 py-2 text-sm text-[#1c1c18] outline-none focus:border-[#974722]"
                  />
                </div>
                <div>
                  <label className="label-md text-[#392317] block mb-1 flex items-center gap-1">
                    <Users size={14} className="text-[#974722]" /> Nombre de personnes
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/60 rounded-lg px-3 py-2 text-sm text-[#1c1c18] outline-none focus:border-[#974722]"
                  />
                </div>
              </div>

              <div>
                <label className="label-md text-[#392317] block mb-1">Précisions ou demandes particulières</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex : prise en charge aéroport de Tozeur, guide francophone, régime alimentaire..."
                  className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/60 rounded-lg px-3 py-2 text-sm text-[#1c1c18] outline-none focus:border-[#974722]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#392317] hover:bg-[#51382b] text-white py-3 px-4 rounded-xl font-label-lg transition-colors shadow-sm cursor-pointer"
                >
                  Envoyer la Demande
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  className="flex-1 bg-[#974722] hover:bg-[#772f0b] text-white py-3 px-4 rounded-xl font-label-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>Réserver via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
