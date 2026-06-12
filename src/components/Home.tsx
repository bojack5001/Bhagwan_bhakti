import React from 'react';
import { Play, Flame, ChevronRight, Droplets, Flower2, Users, BookOpen, Heart } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Home() {
  const { japaCount, dailyGoal, incrementJapa } = useStore();
  const progress = Math.min((japaCount / dailyGoal) * 100, 100);

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-6 pt-2">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center shadow-lg mb-4 hover:scale-105 transition-transform">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 text-center">Bhagwan Bhakti</h1>
        <p className="text-lg text-gray-500 font-semibold mt-1">Divine Counter</p>
        <div className="h-1 w-12 bg-orange-300 mt-4 rounded-full"></div>
      </div>

      {/* Today's Japa Card */}
      <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
        <h2 className="text-center text-lg font-bold text-gray-800 mb-2">Today's Japa</h2>
        <div className="text-center text-6xl font-extrabold text-orange-500 mb-4">{japaCount}</div>
        <div className="flex justify-end mb-2">
          <span className="text-xs font-bold text-blue-500">Goal: {japaCount}/{dailyGoal}</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Start Japa Card */}
      <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm border border-orange-100 flex flex-col items-center hover:shadow-md transition-shadow">
        <p className="text-center text-gray-500 mb-6">Begin your spiritual journey with<br/>Radha Naam Japa</p>
        <button 
          onClick={incrementJapa}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold text-lg flex items-center justify-center shadow-md hover:opacity-90 active:scale-95 transition-all"
        >
          <Play size={20} className="mr-2" fill="white" />
          Start Naam Japa
        </button>
      </div>

      {/* Streak Challenge Banner */}
      <button className="w-full mb-8 rounded-3xl p-5 bg-gradient-to-br from-purple-500 via-orange-500 to-yellow-500 flex items-center justify-between shadow-md hover:opacity-95 active:scale-[0.98] transition-all text-left group">
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
            <Flame size={24} className="text-yellow-300" fill="currentColor" />
          </div>
          <div>
            <div className="text-white font-bold text-lg">Join the Streak Challenge</div>
            <div className="text-white/80 text-sm">Win prize up to ₹10K gift card</div>
          </div>
        </div>
        <ChevronRight size={24} className="text-white group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Games Section */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Naam Japa with Game</h3>
      <div className="flex gap-4 mb-8">
        <div className="bg-white rounded-3xl p-4 flex-1 shadow-sm flex flex-col items-center border border-orange-50 hover:shadow-md transition-shadow">
          <div className="bg-sky-50 p-4 rounded-full mb-3 text-sky-500">
            <Droplets size={32} />
          </div>
          <div className="font-bold text-gray-800 mb-3 text-center">Bubble Game</div>
          <button className="border border-pink-500 text-pink-500 rounded-full py-1 px-6 text-xs font-semibold hover:bg-pink-50 active:bg-pink-100 transition-colors">
            ▶ Start
          </button>
        </div>
        <div className="bg-white rounded-3xl p-4 flex-1 shadow-sm flex flex-col items-center border border-orange-50 hover:shadow-md transition-shadow">
          <div className="bg-pink-50 p-4 rounded-full mb-3 text-pink-500">
            <Flower2 size={32} />
          </div>
          <div className="font-bold text-gray-800 mb-3 text-center">Flower Catch Game</div>
          <button className="border border-pink-500 text-pink-500 rounded-full py-1 px-6 text-xs font-semibold hover:bg-pink-50 active:bg-pink-100 transition-colors">
            ▶ Start
          </button>
        </div>
      </div>

      {/* Premium Features Section */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Features in Free</h3>
      <button className="w-full mb-4 rounded-3xl p-6 h-40 bg-gradient-to-br from-slate-800 to-slate-600 flex flex-col justify-center shadow-md relative overflow-hidden text-left hover:opacity-95 active:scale-[0.98] transition-all group">
        <div className="text-white font-bold text-xl mb-1">My Radha Jap Community</div>
        <div className="text-gray-300 text-sm w-2/3">Let's chant Radha naam with family and friends</div>
        <div className="absolute right-4 bottom-4 bg-white/20 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
          <Users size={24} />
        </div>
      </button>

      <div className="flex gap-4 mb-8">
        <div className="bg-white rounded-3xl p-4 flex-1 shadow-sm flex flex-col items-center border border-orange-50 hover:shadow-md transition-shadow cursor-pointer">
          <div className="bg-amber-50 p-4 rounded-full mb-3 text-amber-600">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div className="font-bold text-gray-800 mb-1 text-center">More Mantra</div>
          <div className="text-xs text-gray-500 text-center">Breathe. Chant. Tap.</div>
        </div>
        <div className="bg-white rounded-3xl p-4 flex-1 shadow-sm flex flex-col items-center border border-orange-50 relative hover:shadow-md transition-shadow cursor-pointer">
          <div className="absolute top-3 right-3 bg-orange-100 rounded-full p-1 text-amber-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5z"/></svg>
          </div>
          <div className="bg-purple-50 p-4 rounded-full mb-3 text-purple-500">
            <BookOpen size={32} />
          </div>
          <div className="font-bold text-gray-800 mb-1 text-center">Spiritual Stories</div>
          <div className="text-xs text-gray-500 text-center">Daily stories & videos</div>
        </div>
      </div>

      {/* Support Us Button */}
      <button className="w-full mb-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold text-lg flex items-center justify-center shadow-md hover:opacity-90 active:scale-95 transition-all">
        <Heart size={20} className="mr-2" fill="white" />
        Support Us
      </button>

    </div>
  );
}
