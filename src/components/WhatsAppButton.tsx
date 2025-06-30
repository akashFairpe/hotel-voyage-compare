
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I need help with hotel booking comparison.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl border z-50">
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold">HotelBooker Support</h4>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-green-600 p-1 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                👋 Hi there! How can we help you with your hotel booking today?
              </p>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
              >
                💬 Start WhatsApp Chat
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
              >
                🏨 Find Best Hotel Deals
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
              >
                ❓ General Support
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
