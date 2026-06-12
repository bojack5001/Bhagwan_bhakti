import React, { useState } from 'react';
import { Menu, Coins, Home as HomeIcon, BarChart3, Settings as SettingsIcon, Trophy, Image, Quote, Briefcase, LogOut, X } from 'lucide-react';
import { Home } from './components/Home';
import { Statistics } from './components/Statistics';
import { Leaderboard } from './components/Leaderboard';
import { Settings } from './components/Settings';
import { useStore } from './store/useStore';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { japaCount } = useStore();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'statistics':
        return <Statistics />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] flex flex-col max-w-md mx-auto shadow-xl relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 pt-6 bg-[#FFF9F0] z-10">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 hover:bg-orange-100 rounded-full transition-colors active:scale-90"
        >
          <Menu className="text-gray-800" size={28} />
        </button>
        <button className="p-2 hover:bg-orange-100 rounded-full transition-colors active:scale-90">
          <Coins className="text-amber-500" size={28} />
        </button>
      </div>

      {/* Main Content Area */}
      {renderContent()}

      {/* Bottom Tab Bar */}
      <div className="absolute bottom-0 w-full bg-[#FFF9F0] border-t border-orange-100 flex justify-around items-center py-2 pb-4 px-2 z-20">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`flex flex-col items-center p-2 w-16 transition-all ${activeTab === 'home' ? 'text-orange-500 scale-110' : 'text-stone-400 hover:text-stone-600'}`}
        >
          <HomeIcon size={24} />
          <span className="text-[10px] mt-1 font-semibold">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('statistics')} 
          className={`flex flex-col items-center p-2 w-16 transition-all ${activeTab === 'statistics' ? 'text-orange-500 scale-110' : 'text-stone-400 hover:text-stone-600'}`}
        >
          <BarChart3 size={24} />
          <span className="text-[10px] mt-1 font-semibold">Statistics</span>
        </button>
        <button 
          onClick={() => setActiveTab('leaderboard')} 
          className={`flex flex-col items-center p-2 w-16 transition-all ${activeTab === 'leaderboard' ? 'text-orange-500 scale-110' : 'text-stone-400 hover:text-stone-600'}`}
        >
          <Trophy size={24} />
          <span className="text-[10px] mt-1 font-semibold">Leaderboard</span>
        </button>
        <button 
          onClick={() => setActiveTab('settings')} 
          className={`flex flex-col items-center p-2 w-16 transition-all ${activeTab === 'settings' ? 'text-orange-500 scale-110' : 'text-stone-400 hover:text-stone-600'}`}
        >
          <SettingsIcon size={24} />
          <span className="text-[10px] mt-1 font-semibold">Settings</span>
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="absolute inset-0 bg-black/40 z-30 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`absolute top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-[#FFF9F0] z-40 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="p-4 pt-8">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl p-5 mb-6 shadow-sm border border-orange-50">
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 bg-[#65A30D] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-3">
                C
              </div>
              <div>
                <div className="font-bold text-gray-800 text-lg leading-tight">Chutti Jagan98</div>
                <div className="text-gray-400 text-xs">chuttijagan98@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center mb-4 text-gray-800">
              <span className="font-semibold mr-1 text-sm">Total Japa:</span>
              <span className="text-orange-500 font-bold text-sm">{japaCount}</span>
            </div>

            <div className="bg-orange-300/40 text-orange-600 font-bold text-xs py-1.5 px-3 rounded-md inline-flex items-center">
              <Trophy size={14} className="mr-1" /> Level 0
            </div>
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-3xl p-3 shadow-sm border border-orange-50 flex flex-col space-y-1">
            <button 
              onClick={() => { setActiveTab('home'); setIsSidebarOpen(false); }}
              className={`flex items-center w-full p-4 rounded-xl transition-colors ${activeTab === 'home' ? 'text-orange-500 font-bold' : 'text-gray-800 font-semibold hover:bg-orange-50'}`}
            >
              <HomeIcon size={20} className="mr-4" />
              Home
            </button>
            <div className="h-px bg-gray-100 mx-4"></div>
            <button className="flex items-center w-full p-4 rounded-xl text-gray-800 font-semibold hover:bg-orange-50 transition-colors">
              <Image size={20} className="mr-4 text-orange-400" />
              Wallpapers
            </button>
            <div className="h-px bg-gray-100 mx-4"></div>
            <button className="flex items-center w-full p-4 rounded-xl text-gray-800 font-semibold hover:bg-orange-50 transition-colors">
              <Quote size={20} className="mr-4 text-orange-400" />
              Quotes
            </button>
            <div className="h-px bg-gray-100 mx-4"></div>
            <button className="flex items-center w-full p-4 rounded-xl text-gray-800 font-semibold hover:bg-orange-50 transition-colors">
              <Briefcase size={20} className="mr-4 text-orange-400" />
              Partner With Us
            </button>
          </div>
        </div>

        <div className="mt-auto p-4 mb-4">
          <button className="w-full flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-red-100 text-rose-500 font-bold hover:bg-rose-50 transition-colors">
            <LogOut size={20} className="mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
