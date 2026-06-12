import React from 'react';
import { ChevronRight, Vibrate, Bell, Settings as SettingsIcon, Cloud, HelpCircle, MessageSquare, Lightbulb, Heart, Star, Share2, Globe } from 'lucide-react';

export function Settings() {
  return (
    <div className="flex-1 overflow-y-auto px-4 pb-6 pt-2 bg-[#FFF9F0]">
      <div className="items-center mb-6 mt-2">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Settings</h2>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-5 mb-4 shadow-sm border border-orange-50 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-[#65A30D] rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4">
            C
          </div>
          <div>
            <div className="font-bold text-gray-800 text-lg">Chutti Jagan98</div>
            <div className="text-gray-500 text-sm">chuttijagan98@gmail.com</div>
          </div>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>

      {/* Premium Banner */}
      <div className="bg-gradient-to-r from-orange-400 via-rose-500 to-pink-600 rounded-2xl p-4 mb-6 shadow-md flex items-center justify-between cursor-pointer hover:opacity-95 transition-opacity">
        <div className="flex items-center text-white">
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 14l9-9 9 9-4 8H7l-4-8z"></path></svg>
          <div>
            <div className="font-bold">Radha Jap Premium</div>
            <div className="text-xs text-white/90">Support our app and enjoy an ad-free experience</div>
          </div>
        </div>
        <ChevronRight className="text-white/80" />
      </div>

      {/* App Settings Group */}
      <div className="bg-white rounded-3xl p-2 mb-6 shadow-sm border border-orange-50">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center text-gray-700">
            <Vibrate className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Vibration</span>
          </div>
          <div className="w-11 h-6 bg-stone-300 rounded-full relative cursor-pointer">
            <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center text-gray-700">
            <div className="text-orange-400 mr-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <span className="font-semibold text-[15px]">Vibrate with Each Mala</span>
          </div>
          <div className="w-11 h-6 bg-stone-300 rounded-full relative cursor-pointer">
            <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer hover:bg-orange-50 transition-colors">
          <div className="flex items-center text-gray-700">
            <SettingsIcon className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">App Settings</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-orange-50 transition-colors rounded-b-2xl">
          <div className="flex items-center text-gray-700">
            <Bell className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Notification</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
      </div>

      {/* Backup Group */}
      <div className="bg-white rounded-3xl p-2 mb-6 shadow-sm border border-orange-50">
        <div className="flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer hover:bg-orange-50 transition-colors rounded-t-2xl">
          <div className="flex items-center text-gray-700">
            <Cloud className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Local Backup & Restore</span>
          </div>
          <div className="flex items-center">
            <span className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mr-2">PRO</span>
            <ChevronRight className="text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-orange-50 transition-colors rounded-b-2xl">
          <div className="flex items-center text-gray-700">
            <Cloud className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Cloud Backup</span>
          </div>
          <div className="flex items-center">
            <span className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mr-2">PRO</span>
            <ChevronRight className="text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Support Group */}
      <div className="bg-white rounded-3xl p-2 mb-6 shadow-sm border border-orange-50">
        <div className="flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer hover:bg-orange-50 transition-colors rounded-t-2xl">
          <div className="flex items-center text-gray-700">
            <HelpCircle className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Help & Support</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
        <div className="flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer hover:bg-orange-50 transition-colors">
          <div className="flex items-center text-gray-700">
            <MessageSquare className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Send Feedback</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-orange-50 transition-colors rounded-b-2xl">
          <div className="flex items-center text-gray-700">
            <Lightbulb className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Feature Suggestion</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
      </div>

      {/* More Options Group */}
      <div className="bg-white rounded-3xl p-2 mb-8 shadow-sm border border-orange-50">
        <div className="flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer hover:bg-orange-50 transition-colors rounded-t-2xl">
          <div className="flex items-center text-gray-700">
            <Heart className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Support Us</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
        <div className="flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer hover:bg-orange-50 transition-colors">
          <div className="flex items-center text-gray-700">
            <Star className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Write a Review</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-orange-50 transition-colors rounded-b-2xl">
          <div className="flex items-center text-gray-700">
            <Share2 className="text-orange-400 mr-3" size={20} />
            <span className="font-semibold text-[15px]">Share App</span>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
      </div>

      {/* Social Links & Footer */}
      <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm border border-orange-50 flex justify-around items-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </div>
          <span className="text-xs font-semibold text-gray-600">Instagram</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-2 text-white">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </div>
          <span className="text-xs font-semibold text-gray-600">WhatsApp</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-2">
            <Globe className="text-white" size={24} />
          </div>
          <span className="text-xs font-semibold text-gray-600">Website</span>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-4 pb-10">
        <a href="#" className="text-gray-800 font-semibold text-sm">Privacy Policy</a>
        <span className="text-gray-400 font-semibold text-sm border-l border-gray-300 pl-4">Version 1.2.1</span>
      </div>
    </div>
  );
}
