import React from 'react';
import { ChevronLeft, ChevronRight, Info, BarChart2, Check, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Statistics() {
  const { japaCount } = useStore();

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-6 pt-2">
      <div className="items-center mb-6 mt-2">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Statistics</h2>
      </div>

      {/* Total Japa Card */}
      <div className="mb-6 cursor-pointer">
        <div className="rounded-3xl h-48 bg-gradient-to-br from-slate-800 to-slate-600 flex flex-col justify-center items-center shadow-md relative overflow-hidden group hover:opacity-95 transition-opacity">
          <div className="text-orange-400 font-bold text-2xl mb-2 z-10">Total Japa</div>
          <div className="text-white font-extrabold text-7xl z-10">{japaCount}</div>
          <div className="absolute bottom-4 right-4 flex items-center z-10">
            <span className="text-gray-300 text-sm mr-1">Report Card</span>
            <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
          </div>
          {/* Faint background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-white rounded-xl p-4 mb-8 shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
        <Info size={20} className="text-gray-500 mr-3 mt-1 shrink-0" />
        <p className="text-gray-600 text-sm flex-1 leading-relaxed">
          Uninstalling will clear daily stats, progress, calendar, and reports. Total japa, badges, and streak are saved with your Gmail login. To avoid losing analytics data, please take a backup from the Settings screen.
        </p>
      </div>

      {/* Progress Analytics */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Progress Analytics</h3>
      <div className="bg-white rounded-3xl p-5 mb-8 shadow-sm border border-orange-50">
        
        <div className="flex justify-center mb-6">
          <div className="flex bg-orange-50 rounded-full p-1">
            <button className="bg-orange-400 text-white rounded-full px-6 py-2 shadow-sm font-bold transition-transform active:scale-95">Weekly</button>
            <button className="text-gray-500 font-semibold rounded-full px-6 py-2 hover:bg-orange-100/50 transition-colors">Monthly</button>
            <button className="text-gray-500 font-semibold rounded-full px-6 py-2 hover:bg-orange-100/50 transition-colors">Yearly</button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8 px-2">
          <button className="bg-orange-50 p-2 rounded-full hover:bg-orange-100 transition-colors active:scale-90">
            <ChevronLeft size={20} className="text-orange-500" />
          </button>
          <span className="font-bold text-gray-800 text-base">Jun 08 - Jun 14</span>
          <button className="bg-orange-50 p-2 rounded-full hover:bg-orange-100 transition-colors active:scale-90">
            <ChevronRight size={20} className="text-orange-500" />
          </button>
        </div>

        {/* Mock Bar Chart */}
        <div className="h-48 border-b border-l border-gray-200 ml-4 mb-4 flex items-end justify-around pb-0 relative">
            <div className="w-4 h-0 bg-orange-400 rounded-t-sm transition-all duration-500 hover:h-8 cursor-pointer"></div>
            <div className="w-4 h-0 bg-orange-400 rounded-t-sm transition-all duration-500 hover:h-12 cursor-pointer"></div>
            <div className="w-4 h-0 bg-orange-400 rounded-t-sm transition-all duration-500 hover:h-6 cursor-pointer"></div>
            <div className="w-4 h-0 bg-orange-400 rounded-t-sm transition-all duration-500 hover:h-16 cursor-pointer"></div>
            <div className="w-4 h-32 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-t-md shadow-md cursor-pointer hover:opacity-90 transition-opacity relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {japaCount} Japa
              </div>
            </div>
            <div className="w-4 h-0 bg-orange-400 rounded-t-sm transition-all duration-500 hover:h-4 cursor-pointer"></div>
            <div className="w-4 h-0 bg-orange-400 rounded-t-sm transition-all duration-500 hover:h-10 cursor-pointer"></div>
        </div>
        <div className="flex justify-around ml-4 mb-6 text-xs text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
        </div>

        <div className="bg-orange-50 rounded-xl py-3 flex items-center justify-center border border-orange-100">
          <BarChart2 size={16} className="text-orange-500 mr-2" />
          <span className="text-orange-500 font-bold ml-2">Total: {japaCount} Japa</span>
        </div>

      </div>

      {/* Japa Calendar */}
      <h3 className="text-xl font-bold text-gray-800 mb-1">Japa Calendar</h3>
      <p className="text-sm text-gray-500 mb-4">Your Japa Journey</p>
      <div className="bg-white rounded-3xl p-5 mb-8 shadow-sm border border-orange-50">
        
        <div className="flex justify-between items-center mb-6">
          <button className="p-2 hover:bg-orange-50 rounded-full transition-colors active:scale-90">
            <ChevronLeft size={24} className="text-orange-500" />
          </button>
          <span className="font-bold text-orange-500 text-lg">June 2026</span>
          <button className="p-2 hover:bg-orange-50 rounded-full transition-colors active:scale-90">
            <ChevronRight size={24} className="text-orange-500" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="text-xs font-bold text-orange-300 text-center">{day}</div>
            ))}
        </div>

        <div className="grid grid-cols-7 gap-y-4 gap-x-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className={`h-8 flex items-center justify-center rounded-lg cursor-pointer transition-colors ${i === 11 ? 'border-2 border-orange-400 bg-orange-50' : 'hover:bg-gray-50'}`}>
              <span className={`text-sm ${i === 11 ? 'text-orange-500 font-bold' : 'text-gray-600'}`}>
                {i + 1}
              </span>
            </div>
          ))}
          {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={'empty'+i} className="h-8 flex items-center justify-center bg-gray-50/50 rounded-lg">
                <span className="text-sm text-gray-300">{i + 1}</span>
              </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <div className="bg-orange-50 px-4 py-2 rounded-l-xl flex items-center border border-orange-100 border-r-0">
            <div className="bg-green-400 rounded-full p-0.5 mr-2">
              <Check size={12} className="text-white" />
            </div>
            <span className="text-gray-600 text-xs font-semibold">108 Japa Done</span>
          </div>
          <div className="bg-orange-50 px-4 py-2 rounded-r-xl flex items-center border border-orange-100">
            <div className="bg-red-400 rounded-full p-0.5 mr-2">
              <X size={12} className="text-white" />
            </div>
            <span className="text-gray-600 text-xs font-semibold">Missed</span>
          </div>
        </div>

      </div>

    </div>
  );
}
