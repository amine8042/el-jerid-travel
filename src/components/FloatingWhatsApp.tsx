import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { AGENCY_INFO } from '../data/travelData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuickMsg, setSelectedQuickMsg] = useState('Bonjour, je souhaite des informations sur vos expéditions sahariennes.');

  const quickMessages = [
    'Bonjour, je souhaite des informations sur vos expéditions sahariennes.',
    'Bonjour, je souhaite réserver l\'excursion Grand Tour des Oasis & Dunes.',
    'Bonjour, je souhaite des disponibilités pour la location d\'un 4x4.',
    'Bonjour, je prépare un voyage sur mesure pour un groupe.'
  ];

  const handleSend = () => {
    const url = AGENCY_INFO.whatsappUrl(selectedQuickMsg);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick chat card popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#d3c3bc]/40 p-4 animate-fadeIn transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-[#d3c3bc]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#974722] text-white flex items-center justify-center shadow-sm">
                <MessageCircle size={18} />
              </div>
              <div>
                <h4 className="font-headline-sm text-sm text-[#392317] font-semibold leading-tight">El Jerid Travel Concierge</h4>
                <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  En ligne • Réponse rapide
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#81746e] hover:bg-[#ebe8e2] cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="py-3 text-xs text-[#4f443f]">
            <p className="mb-2">Sélectionnez votre demande ou personnalisez votre message WhatsApp :</p>
            <div className="flex flex-col gap-1.5 max-h-40 overflow-y-auto pr-1">
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedQuickMsg(msg)}
                  className={`text-left p-2 rounded-lg text-[12px] transition-all cursor-pointer ${
                    selectedQuickMsg === msg
                      ? 'bg-[#51382b] text-[#ffdbca] font-medium shadow-xs'
                      : 'bg-[#f0eee8] text-[#1c1c18] hover:bg-[#ebe8e2]'
                  }`}
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#d3c3bc]/30 flex gap-2">
            <input
              type="text"
              value={selectedQuickMsg}
              onChange={(e) => setSelectedQuickMsg(e.target.value)}
              className="flex-1 bg-[#f0eee8] rounded-lg px-3 py-2 text-xs text-[#1c1c18] outline-none border border-transparent focus:border-[#974722]"
              placeholder="Votre message..."
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 bg-[#974722] hover:bg-[#392317] text-white rounded-lg transition-colors flex items-center justify-center shadow-sm cursor-pointer"
              title="Ouvrir WhatsApp"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#974722] text-white flex items-center justify-center shadow-xl hover:bg-[#392317] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Contacter sur WhatsApp"
        title="Discuter sur WhatsApp (+216 55 454 406)"
      >
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </button>
    </div>
  );
};
