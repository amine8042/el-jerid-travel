import React from 'react';
import { X, User, Heart, Compass, ShieldCheck } from 'lucide-react';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToBooking: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onNavigateToBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#fcf9f3] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#d3c3bc]/40 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#81746e] hover:bg-[#ebe8e2] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-[#d3c3bc]/30">
          <div className="w-12 h-12 rounded-full bg-[#51382b] text-[#ffdbca] flex items-center justify-center font-bold text-lg shadow-sm">
            <User size={22} />
          </div>
          <div>
            <h3 className="font-headline-sm text-base text-[#392317] font-semibold">Espace Voyageur</h3>
            <span className="text-xs text-[#81746e]">Client Privilégié El Jerid Travel</span>
          </div>
        </div>

        <div className="py-4 space-y-3 text-xs text-[#4f443f]">
          <div className="p-3 bg-[#f0eee8] rounded-xl flex items-center justify-between">
            <span className="font-medium text-[#1c1c18]">Devise d'affichage</span>
            <span className="font-bold text-[#392317]">TND / EUR</span>
          </div>

          <div className="p-3 bg-[#f0eee8] rounded-xl flex items-center justify-between">
            <span className="font-medium text-[#1c1c18]">Assistance Personnelle</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <ShieldCheck size={14} /> VIP 24/7
            </span>
          </div>

          <div className="p-3 bg-[#f0eee8] rounded-xl">
            <span className="font-medium text-[#1c1c18] block mb-1">Expéditions Favorites</span>
            <p className="text-[11px] text-[#81746e]">
              Enregistrez vos itinéraires préférés en discutant avec notre concierge sur WhatsApp.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <button
            onClick={() => {
              onClose();
              onNavigateToBooking();
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-[#974722] hover:bg-[#392317] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass size={14} />
            <span>Créer un devis personnalisé</span>
          </button>
          <button
            onClick={onClose}
            className="w-full py-2 px-4 rounded-xl text-[#81746e] hover:text-[#1c1c18] text-xs transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
