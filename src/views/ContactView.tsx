import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/travelData';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Mail,
  User
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('excursions');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `EJT-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const handleOpenWhatsAppFromForm = () => {
    const text = `Bonjour El Jerid Travel,\n\nJe vous contacte via le formulaire de réservation :\n- Réf: ${referenceId || 'Nouveau Dossier'}\n- Nom: ${fullName}\n- Email: ${email}\n- Service: ${service}\n- Date: ${date || 'À convenir'}\n- Message: ${message || 'Demande d\'information'}`;
    window.open(AGENCY_INFO.whatsappUrl(text), '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-[#fcf9f3]">
      {/* Hero / Header Intro */}
      <section className="relative w-full py-16 sm:py-20 bg-[#f6f3ed] overflow-hidden border-b border-[#d3c3bc]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#51382B_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="label-md text-[#974722] uppercase tracking-widest font-bold">
              Contactez-Nous
            </span>
            <h1 className="font-display-lg text-[#392317] text-3xl sm:text-5xl md:text-6xl font-light leading-tight">
              Commencez Votre Aventure Saharienne
            </h1>
            <p className="text-body-lg text-[#4f443f] max-w-xl text-base sm:text-lg leading-relaxed">
              Que vous planifiez une expédition exclusive en 4x4 à travers les dunes de Tozeur ou la location d'un véhicule de luxe, notre équipe de concierges sahariens est à votre entière disposition.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={AGENCY_INFO.whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#974722] text-white hover:bg-[#392317] transition-colors text-label-lg shadow-sm font-semibold cursor-pointer"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Direct (+216 55 454 406)</span>
              </a>

              <a
                href="#contact-form"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#51382b] text-[#c4a190] hover:bg-[#392317] hover:text-white transition-colors text-label-lg font-semibold cursor-pointer"
              >
                <span>Formulaire sur-mesure</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-[#d3c3bc]/40">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoqi4JSBftVIDVh3WOCyQBqLW5PLY9lehZ3qlOdyU4zGUZSNQRNUc9HxEDyLM0oCTBzSFdgMgYqfpQ_Lzjz_b7REFVbDg8tIpi80ESbppg86vmC-6DXKIOlgRsdRzoLQLtqCZ8JZp1pAGSo2Lj_Ial4l4cyBk5O0B2oMnFAZJ3zxtkWI2_O4tSNqwWndx4Ft6CQfu9oiFu8IkQBHIVQ85uz3ZW5Oe1ZduUVxnPGHJAxc_A0Hercnyi')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & Hours */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#ffffff] p-8 rounded-xl shadow-xs border border-[#d3c3bc]/30 relative overflow-hidden flex flex-col gap-6">
              <span className="label-md text-[#974722] uppercase font-bold tracking-wider">
                Informations & Coordonnées
              </span>
              <h3 className="font-headline-md text-[#392317] text-2xl font-semibold">
                Bureau Principal à Tozeur
              </h3>
              <p className="text-body-md text-[#4f443f] leading-relaxed">
                Notre agence principale est située au cœur de la zone touristique, point de départ idéal pour vos excursions dans le Grand Erg Oriental.
              </p>

              <div className="flex flex-col gap-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#51382b]/10 flex items-center justify-center shrink-0 text-[#392317]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="label-lg text-[#392317] block font-bold">Adresse</span>
                    <span className="text-body-sm text-[#4f443f]">Zone Touristique, Tozeur 2210, Tunisia</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#51382b]/10 flex items-center justify-center shrink-0 text-[#392317]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="label-lg text-[#392317] block font-bold">Téléphone / WhatsApp</span>
                    <a href="tel:+21655454406" className="text-body-sm text-[#4f443f] hover:text-[#974722] transition-colors">
                      +216 55 454 406
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#51382b]/10 flex items-center justify-center shrink-0 text-[#392317]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="label-lg text-[#392317] block font-bold">Horaires d'ouverture</span>
                    <span className="text-body-sm text-[#4f443f] block">Lundi – Dimanche : 08:00 – 20:00</span>
                    <span className="block text-xs text-[#974722] mt-1 font-medium">Ouvert jusqu'à 18h00 - à confirmer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote / Concierge Card */}
            <div className="bg-[#51382b] text-[#c4a190] p-8 rounded-xl shadow-sm flex flex-col gap-4">
              <span className="label-md uppercase tracking-wider text-[#ffdbcd] font-bold">
                Service Concierge
              </span>
              <h4 className="font-headline-sm text-white text-xl font-semibold">
                Besoin d'un itinéraire privé ?
              </h4>
              <p className="text-body-sm text-[#f3f0ea]/90 leading-relaxed text-xs sm:text-sm">
                Nos conseillers locaux élaborent des séjours sur-mesure pour les voyageurs exigeants en quête d'authenticité et de raffinement.
              </p>
              <a
                href={AGENCY_INFO.whatsappUrl('Bonjour, je souhaite échanger avec un concierge pour un itinéraire privé.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-label-lg mt-2 hover:text-[#ffdbcd] transition-colors"
              >
                <span>Discuter sur WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#ffffff] p-8 sm:p-10 rounded-xl shadow-xs border border-[#d3c3bc]/30 flex flex-col gap-6">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <span className="label-md text-[#974722] uppercase tracking-wider font-bold">
                  Demande Transmise
                </span>
                <h3 className="font-headline-lg text-[#392317] text-2xl font-semibold">
                  Merci, {fullName || 'cher voyageur'} !
                </h3>
                <p className="text-body-md text-[#4f443f] max-w-md">
                  Votre demande a bien été envoyée avec la référence <strong className="text-[#392317]">#{referenceId}</strong>. Un conseiller El Jerid Travel vous contactera très prochainement sous 2 heures.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-md">
                  <button
                    onClick={handleOpenWhatsAppFromForm}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#974722] text-white text-xs font-semibold hover:bg-[#392317] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquare size={16} />
                    <span>Transmettre aussi sur WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="py-3 px-4 rounded-xl bg-[#f0eee8] text-[#392317] text-xs font-semibold hover:bg-[#ebe8e2] transition-colors cursor-pointer"
                  >
                    Nouvelle demande
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  <span className="label-md text-[#974722] uppercase font-bold tracking-wider">
                    Réservation & Demande
                  </span>
                  <h3 className="font-headline-md text-[#392317] text-2xl font-semibold">
                    Planifiez Votre Voyage
                  </h3>
                  <p className="text-body-sm text-[#4f443f]">
                    Remplissez ce formulaire et recevez une proposition détaillée sous 2 heures.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="label-lg text-[#392317] font-semibold flex items-center gap-1">
                        <User size={14} className="text-[#974722]" /> Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 rounded-lg bg-[#f6f3ed] text-[#1c1c18] placeholder:text-[#81746e] focus:outline-none focus:ring-2 focus:ring-[#974722]/50 text-body-md border border-[#d3c3bc]/40"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="label-lg text-[#392317] font-semibold flex items-center gap-1">
                        <Mail size={14} className="text-[#974722]" /> Adresse Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre.email@exemple.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#f6f3ed] text-[#1c1c18] placeholder:text-[#81746e] focus:outline-none focus:ring-2 focus:ring-[#974722]/50 text-body-md border border-[#d3c3bc]/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="label-lg text-[#392317] font-semibold">Service Intéressé</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#f6f3ed] text-[#1c1c18] focus:outline-none focus:ring-2 focus:ring-[#974722]/50 text-body-md border border-[#d3c3bc]/40 cursor-pointer"
                      >
                        <option value="excursions">Excursions & Expéditions</option>
                        <option value="4x4">4x4 & Expéditions Désert</option>
                        <option value="location-voiture">Location de Voiture</option>
                        <option value="sur-mesure">Circuit Sur-Mesure Privé</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="label-lg text-[#392317] font-semibold flex items-center gap-1">
                        <Calendar size={14} className="text-[#974722]" /> Date de Voyage Souhaitée
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#f6f3ed] text-[#1c1c18] focus:outline-none focus:ring-2 focus:ring-[#974722]/50 text-body-md border border-[#d3c3bc]/40"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label-lg text-[#392317] font-semibold">Message & Détails</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Nombre de personnes, préférences d'hébergement ou requêtes particulières..."
                      className="w-full px-4 py-3 rounded-lg bg-[#f6f3ed] text-[#1c1c18] placeholder:text-[#81746e] focus:outline-none focus:ring-2 focus:ring-[#974722]/50 text-body-md border border-[#d3c3bc]/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#392317] text-white hover:bg-[#974722] transition-colors text-label-lg font-bold shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Envoyer la demande</span>
                    <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 bg-[#f6f3ed] border-t border-[#d3c3bc]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="label-md text-[#974722] uppercase font-bold tracking-wider">
                Localisation
              </span>
              <h2 className="font-headline-lg text-[#392317] text-2xl sm:text-3xl font-light">
                Trouvez Notre Agence à Tozeur
              </h2>
            </div>
            <p className="text-body-sm text-[#4f443f] max-w-sm">
              Situé à l'entrée de la Zone Touristique, accessible facilement depuis l'aéroport international de Tozeur-Nefta.
            </p>
          </div>

          {/* Map Display */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-md relative border border-[#d3c3bc]/30">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPnczDdPV07reHgW3jdkod_sQBBr-2W8Pjtq3RIGtPlOf86Psi-av02Ymh4pLhbyPX4bvmkCICxZe-qQMKF5LZkGg_lKBQeIIMdddGH7bcJ6w1PeIMGlfN74lq3z_KfQtWz4Jesh-HHwRBmqOaJ3SY_m8afLgcTPnPSohaZh7ZXOmt8eyl1ibjqO5tgDcDfiEKrjCSMUGthh4Uxy4zteIfjOmIPTB-UFFDlILrME8Zvx6CBgDMx8B1')`,
              }}
            />
            <div className="absolute bottom-6 left-6 bg-[#fcf9f3]/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-[#d3c3bc]/40 flex items-center gap-3">
              <MapPin size={24} className="text-[#974722] shrink-0" />
              <div>
                <span className="label-lg text-[#392317] block font-bold">El Jerid Travel - Bureau Tozeur</span>
                <span className="text-body-sm text-[#4f443f]">Zone Touristique, Tozeur 2210</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
