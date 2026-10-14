import React from 'react';
import { PageId } from '../types';
import {
  Clock,
  ShieldCheck,
  Compass,
  Heart,
  Leaf,
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full bg-[#fcf9f3]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[716px] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKOQZBTK0zubLVdO5CaJnBQ7liXlVkl1FxgUB2MEGXgMkHQql3DrMdgOsXWVZBUtQkebsGlKmHjw2ja6dyVB26ng7-VXY-onHqrnNmrTyYEUKN2d6Hyg9Sbab3kxdngsRCIQm0AJDdQmPVPJlk0xTOIK8Az0mNUZEPukVDVKG7UnEyCngYJDkxpy6QVGc2XlXZjSx8mT_ACTxKwTwVJDzekPcR5yFvy1G57nmqnoZYjlQ6H1DK3JqQ')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#392317]/60 via-[#392317]/30 to-[#fcf9f3] z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 flex flex-col items-center gap-6">
          <span className="label-lg text-[#ffdbca] uppercase tracking-widest bg-[#392317]/50 px-4 py-1.5 rounded-full backdrop-blur-md border border-[#ffdbca]/25">
            Notre Maison • Tozeur
          </span>

          <h1 className="font-display-lg text-[#fcf9f3] text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl leading-tight">
            L'art du voyage au cœur du Sahara tunisien.
          </h1>

          <p className="font-body-lg text-[#f3f0ea] max-w-2xl text-base sm:text-lg font-light leading-relaxed">
            Ancrés dans l’oasis de Tozeur, nous cultivons une approche confidentielle et sur-mesure du Grand Sud, guidée par une passion inébranlable pour notre terre natale.
          </p>
        </div>
      </section>

      {/* Introduction / Manifesto Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="label-md text-[#974722] uppercase tracking-wider font-bold">
              Notre Philosophie
            </span>
            <h2 className="font-headline-lg text-[#392317] text-3xl sm:text-4xl font-light">
              Authenticité, rigueur et hospitalité séculaire.
            </h2>
            <p className="font-body-md text-[#4f443f] leading-relaxed">
              Fondée par des enfants du Jerid, <strong className="text-[#392317] font-semibold">El Jerid Travel</strong> est née d'une vision singulière : révéler la beauté brute et mystique du sud tunisien loin des sentiers battus. Notre engagement repose sur une exigence absolue de ponctualité, un professionnalisme sur-mesure et une connaissance intime des pistes sahariennes.
            </p>
            <p className="font-body-md text-[#4f443f] leading-relaxed">
              Chaque expédition est pensée comme une parenthèse hors du temps, où le luxe réside dans l'espace, le silence des dunes et la chaleur d'un accueil authentique.
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-[#d3c3bc]/30">
              <div className="flex flex-col">
                <span className="font-display-lg text-[#392317] text-3xl font-bold">15+</span>
                <span className="label-sm text-[#81746e] uppercase">Ans d'expérience</span>
              </div>
              <div className="w-px h-12 bg-[#d3c3bc]" />
              <div className="flex flex-col">
                <span className="font-display-lg text-[#392317] text-3xl font-bold">100%</span>
                <span className="label-sm text-[#81746e] uppercase">Expertise Locale</span>
              </div>
              <div className="w-px h-12 bg-[#d3c3bc]" />
              <div className="flex flex-col">
                <span className="font-display-lg text-[#392317] text-3xl font-bold">VIP</span>
                <span className="label-sm text-[#81746e] uppercase">Sur-mesure</span>
              </div>
            </div>
          </div>

          {/* Right Visual Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div
                className="w-full h-80 rounded-xl bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzJX8FK-BI3Oa25-TBehUh9C8GKpvJO07gdZvbQzR3zCteGEGqjJwlAWrCuT0Bhd5sJoQbTd1Gyce2yrW1Y-fk1eq1s4hSfDtb_GohWW7hgKTTOFLEYCmIIAVrNVJ6Y-x6BPxgckWtGgjED_xty7BR3bS8HeO5Q__X9q1mSnrxp75wbPfnYT7GGjfuUE_rD5PuQr_0u0uPWgAb1IX3ZKuMgdTSXmc-LfKbmu10nXTCZqbA6AYyjg0n')`,
                }}
              />
              <div className="p-6 bg-[#f6f3ed] rounded-xl flex flex-col gap-2 border border-[#d3c3bc]/30">
                <Clock size={28} className="text-[#974722]" />
                <h3 className="font-headline-sm text-[#392317] font-semibold text-lg">Ponctualité & Rigueur</h3>
                <p className="font-body-sm text-[#4f443f]">
                  Un respect absolu des horaires et un timing millimétré pour un voyage serein sans imprévus logistiques.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-0 sm:pt-8">
              <div className="p-6 bg-[#51382b] text-[#c4a190] rounded-xl flex flex-col gap-2 shadow-lg">
                <ShieldCheck size={28} className="text-[#ffb597]" />
                <h3 className="font-headline-sm text-white font-semibold text-lg">Sécurité & Expertise</h3>
                <p className="font-body-sm text-[#f3f0ea]/85">
                  Chauffeurs et guides chevronnés maîtrisant parfaitement les pistes du Grand Erg Oriental et les oasis de montagne.
                </p>
              </div>
              <div
                className="w-full h-80 rounded-xl bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBnueAVEfjYt4HOyYB-D63HnG4vGCFo2vdNCh2NpOBMqu3hTHU_y6pE2MYaw6TZhanRf6yMFlraT3XXbrvqJmHc8O9V0qlu1ikZPYxpYrEKn2_FIDDok97ISpNT5VihkkmB-SMgdg3X0jXR5L6ZYUM2zHcDJbHtd_Ha5soDJGKsd_hpXgdCwZOXi_8qussv66xjQd-zOnvJVg2wDj15BeGNUIjIdlVDGKgTcaVWRE9taQM4jDw8mus')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Bento Grid Section */}
      <section className="w-full bg-[#f0eee8] py-20 my-10 border-y border-[#d3c3bc]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="label-md text-[#974722] uppercase tracking-wider font-bold">
                Nos Piliers
              </span>
              <h2 className="font-headline-lg text-[#392317] text-3xl sm:text-4xl font-light">
                Ce qui nous distingue
              </h2>
            </div>
            <p className="text-body-md text-[#4f443f] max-w-md">
              L'excellence au service de l'authenticité saharienne. Nous concevons chaque voyage avec le souci du détail et le respect de nos traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#fcf9f3] p-8 rounded-xl shadow-xs flex flex-col justify-between gap-8 hover:shadow-md transition-shadow border border-[#d3c3bc]/30">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ebe8e2] flex items-center justify-center text-[#974722]">
                  <Heart size={24} />
                </div>
                <h3 className="font-headline-md text-[#392317] text-xl font-semibold">
                  Hospitalité Légendaire
                </h3>
                <p className="font-body-md text-[#4f443f] text-sm sm:text-base leading-relaxed">
                  Inspirée par la tradition d'accueil du peuple du Jerid, notre équipe vous traite non pas comme des clients, mais comme des hôtes d'honneur dans notre maison.
                </p>
              </div>
              <div className="flex items-center gap-2 text-label-lg text-[#974722] font-semibold">
                <span>Tradition & Chaleur</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fcf9f3] p-8 rounded-xl shadow-xs flex flex-col justify-between gap-8 hover:shadow-md transition-shadow border border-[#d3c3bc]/30">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ebe8e2] flex items-center justify-center text-[#974722]">
                  <Compass size={24} />
                </div>
                <h3 className="font-headline-md text-[#392317] text-xl font-semibold">
                  Connaissance Profonde
                </h3>
                <p className="font-body-md text-[#4f443f] text-sm sm:text-base leading-relaxed">
                  Des oasis cachées de Chebika et Tamerza aux bivouacs secrets au cœur des grandes dunes de Ksar Ghilane, nos guides partagent leurs secrets les mieux gardés.
                </p>
              </div>
              <div className="flex items-center gap-2 text-label-lg text-[#974722] font-semibold">
                <span>Hors des sentiers battus</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fcf9f3] p-8 rounded-xl shadow-xs flex flex-col justify-between gap-8 hover:shadow-md transition-shadow border border-[#d3c3bc]/30">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ebe8e2] flex items-center justify-center text-[#974722]">
                  <Leaf size={24} />
                </div>
                <h3 className="font-headline-md text-[#392317] text-xl font-semibold">
                  Tourisme Durable
                </h3>
                <p className="font-body-md text-[#4f443f] text-sm sm:text-base leading-relaxed">
                  Nous soutenons activement les communautés locales de l'oasis, veillons à la préservation des écosystèmes fragiles du désert et minimisons notre empreinte carbone.
                </p>
              </div>
              <div className="flex items-center gap-2 text-label-lg text-[#974722] font-semibold">
                <span>Éthique & Écologie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Presentation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="label-md text-[#974722] uppercase tracking-wider font-bold">
            Les Hommes et Femmes de l'Ombre
          </span>
          <h2 className="font-headline-lg text-[#392317] text-3xl sm:text-4xl font-light">
            Notre Équipe à Tozeur
          </h2>
          <p className="font-body-md text-[#4f443f] max-w-xl">
            Des professionnels passionnés, natifs de la région, unis par l'amour du désert et le sens du service d'exception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mohamed Ben Amor */}
          <div className="group relative overflow-hidden rounded-xl bg-[#f6f3ed] shadow-md border border-[#d3c3bc]/30">
            <div
              className="w-full h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSiOaucWlXqALnojthSyqwv2ZIr75LAHYIGCZfeiP2Y1KQrmT4vSi3s6fFLom4iyOCh81LcXrn7omz8lGWjXh9B2JDHVIQ2sgbTYwHrXqiblD57yYKu6rZNdUcYo1yg3yh-nQJ6GPGVEu7VLRutPsz4cxHe_dSHxDsgRsDbqB9esBf-HUSawiQwJdc8iXRjCxJfaqIveJEfwjYn9xdOq0Mr5QpsMNOVd4LqkF5yJswuGfwL4mxyXR0')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#392317]/90 via-[#392317]/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="label-md text-[#ffb597] uppercase tracking-wider font-bold">
                Fondateur & Guide Principal
              </span>
              <h3 className="font-headline-md text-2xl font-normal mt-1">
                Mohamed Ben Amor
              </h3>
              <p className="font-body-sm text-[#ebe8e2]/85 mt-1 text-xs">
                Natif de Tozeur, Mohamed arpente le Sahara depuis plus de 20 ans avec une passion contagieuse pour l'histoire saharienne.
              </p>
            </div>
          </div>

          {/* Youssef Jeridi */}
          <div className="group relative overflow-hidden rounded-xl bg-[#f6f3ed] shadow-md border border-[#d3c3bc]/30">
            <div
              className="w-full h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDChQBBqQJ39SkqRK1Wnf18az7xLx2ME0ldSdZ0TkrH3wToial_HEgy5F22udI3MSYx-NpkHtJyXVeuL9Nda8Tp5LZapeoVsdqQxX205-KdasYDqyeSUaOW8_8jnFM_o249qL4OnDRwN8lXmlXlEZY24I6b4yb5usnO1n8SM1JXh6N930QE5l2tdptHe9vRv9fz87Er9L-ZAb1sDmoK9yTQCm0gXf-MiCOcrRPZTNX5cc0Oy-emhEcP')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#392317]/90 via-[#392317]/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="label-md text-[#ffb597] uppercase tracking-wider font-bold">
                Responsable Logistique & Flotte
              </span>
              <h3 className="font-headline-md text-2xl font-normal mt-1">
                Youssef Jeridi
              </h3>
              <p className="font-body-sm text-[#ebe8e2]/85 mt-1 text-xs">
                Maître d'œuvre de votre sécurité et de la ponctualité de nos expéditions en véhicules 4x4 haut de gamme.
              </p>
            </div>
          </div>

          {/* Amira Slimane */}
          <div className="group relative overflow-hidden rounded-xl bg-[#f6f3ed] shadow-md border border-[#d3c3bc]/30">
            <div
              className="w-full h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd2WqP0hUT4GDqML0sqKYgT2p0pvjttOypwVSkEzUNLhhQdmmk2kYAvsai0iGmj82565RKJWYQDi-DQdJWHu3R14oA8jdc_tx1-LENTx_fukx7lQESR54ugnxt6SdHQJ2HJxoQ3vOSK8k-uBa002QGYzc4siFnILLYjKWlqAsPacmccu5LBf2Z_6-ZsjH9A11bGSVC3-4lshrsQt6oZaLtP_9oXN-DLGeeOm0Y3NgFsTSb96rJ6XrC')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#392317]/90 via-[#392317]/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="label-md text-[#ffb597] uppercase tracking-wider font-bold">
                Relations Voyageurs & Conciergerie
              </span>
              <h3 className="font-headline-md text-2xl font-normal mt-1">
                Amira Slimane
              </h3>
              <p className="font-body-sm text-[#ebe8e2]/85 mt-1 text-xs">
                À l'écoute de vos moindres souhaits pour concevoir un séjour sur-mesure parfaitement orchestré.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Commitment Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#392317] text-white rounded-2xl p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center shadow-xl">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#974722]/20 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 lg:w-1/2 relative z-10">
            <span className="label-md text-[#ffb597] uppercase tracking-widest font-bold">
              Notre Engagement Éthique
            </span>
            <h2 className="font-display-lg text-white text-3xl md:text-4xl font-light leading-tight">
              Protéger le désert, honorer ses habitants.
            </h2>
            <p className="font-body-md text-[#ebe8e2]/90 leading-relaxed text-sm sm:text-base">
              Le Sahara est un écosystème fragile et précieux. Chez El Jerid Travel, nous sommes fiers de pratiquer un tourisme conscient et respectueux. Nous travaillons exclusivement avec des prestataires locaux, soutenons l'artisanat de l'oasis de Tozeur et veillons à laisser les dunes aussi immaculées que nous les trouvons.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#974722] hover:bg-[#ffb597] hover:text-[#392317] text-white px-6 py-3 rounded-lg font-label-lg transition-colors flex items-center gap-2 cursor-pointer font-semibold shadow-md"
              >
                <span>Discuter de votre projet</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 relative z-10">
            <div
              className="h-64 rounded-xl bg-cover bg-center shadow-md"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCN5rsINIEUJjQEAD1M63h-kVnJoK0oIMiPwawrEcZGt3E8lwKZ_4VfGEfzLnX3Zs_EsjZ3AWWJ1FXAd73HhMZwgT8AGKjyvguh7V0e0PxLui3sqvXJge9EDUn8RPvRIJJs69UlB97aKIbvnMl4quFP2hcTST5b8dsnh90vQWAdgSAI7ZuDHOev0_cgXdqzb8Lwx6I1yroTJFTZwp3qD28AaRjp1_AwYLXKCxJhSfYZ8usLAqf1_K6w')`,
              }}
            />
            <div
              className="h-64 rounded-xl bg-cover bg-center shadow-md mt-8"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_rUnfIwgb47n46WcCaGLtE8eBhNbl-uBX11jaVa104C322J-PYTmnxEmsQDhNrZDBD5U3NowuvX6YFIg__zFammABDP11E16XzN2XMfjd9-B_raUpIpywFBhIEeJ1pVd1jXtxFMT3fm1zfYe5Xfbe5BQAe0rxvC_zUfSzD0907a3U3eKu0TesipIYswQbUPcewylcHPubW5z_fbNmUleYmrOdDdzqXUMyztx0MXqjFV0EdQjh992z')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Location Map / Office Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center bg-[#f6f3ed] rounded-2xl p-8 md:p-12 border border-[#d3c3bc]/30">
          <div className="flex flex-col gap-4 md:w-1/2">
            <span className="label-md text-[#974722] uppercase tracking-wider font-bold">
              Venez nous rendre visite
            </span>
            <h2 className="font-headline-lg text-[#392317] text-3xl font-light">
              Notre Bureau à Tozeur
            </h2>
            <p className="font-body-md text-[#4f443f] leading-relaxed">
              Situés au cœur de la zone touristique de Tozeur, nos bureaux vous accueillent pour planifier vos excursions dans le Grand Sud, privatiser un véhicule 4x4 ou organiser votre bivouac d'exception.
            </p>

            <div className="flex flex-col gap-3 text-body-md text-[#1c1c18] pt-2">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#974722] shrink-0" />
                <span className="text-sm">Zone Touristique, Tozeur 2210, Tunisie</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#974722] shrink-0" />
                <span className="text-sm">+216 55 454 406</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#974722] shrink-0" />
                <span className="text-sm">contact@eljeridtravel.com</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full h-80 rounded-xl overflow-hidden shadow-md border border-[#d3c3bc]/40">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPnczDdPV07reHgW3jdkod_sQBBr-2W8Pjtq3RIGtPlOf86Psi-av02Ymh4pLhbyPX4bvmkCICxZe-qQMKF5LZkGg_lKBQeIIMdddGH7bcJ6w1PeIMGlfN74lq3z_KfQtWz4Jesh-HHwRBmqOaJ3SY_m8afLgcTPnPSohaZh7ZXOmt8eyl1ibjqO5tgDcDfiEKrjCSMUGthh4Uxy4zteIfjOmIPTB-UFFDlILrME8Zvx6CBgDMx8B1')`,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
