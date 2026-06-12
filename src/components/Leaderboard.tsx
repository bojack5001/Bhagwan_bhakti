import React, { useState } from 'react';
import { Trophy, Globe } from 'lucide-react';

export function Leaderboard() {
  const [timeFilter, setTimeFilter] = useState('Today');

  const topThree = [
    { rank: 2, name: 'Akhil chaud...', count: '1,86,985', location: 'India, Uttar Pr...', color: 'bg-blue-500', initial: 'A' },
    { rank: 1, name: 'Manoj Pacha...', count: '1,94,400', location: 'India, Rajasthan', image: 'https://i.pravatar.cc/150?img=11' },
    { rank: 3, name: 'Suresh Jat', count: '1,52,519', location: 'India, Gujarat', image: 'https://i.pravatar.cc/150?img=12' }
  ];

  const others = [
    { rank: 4, name: 'Ganesh Mehra', count: '1,52,429', image: 'https://i.pravatar.cc/150?img=68' },
    { rank: 5, name: 'Shalini Tiwari', count: '1,50,829', initial: 'S', color: 'bg-pink-500' },
    { rank: 6, name: 'Vivek Mishra', count: '1,47,960', initial: 'V', color: 'bg-indigo-500' },
    { rank: 7, name: 'Shiela Agarwal', count: '1,31,831', initial: 'S', color: 'bg-slate-600' },
    { rank: 8, name: 'Shivcharan gurjar Gurjar', count: '1,22,212', image: 'https://i.pravatar.cc/150?img=59' },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-6 pt-2">
      <div className="flex justify-between items-center mb-6 mt-2">
        <h2 className="text-3xl font-bold text-gray-800">Leaderboard</h2>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-full font-bold shadow-sm flex items-center text-sm">
          <Trophy size={16} className="mr-2" />
          My Ranking
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-stone-200/60 p-1 rounded-2xl flex justify-between mb-4">
        {['Today', 'This Week', 'This Month', 'All Time'].map(tab => (
          <button 
            key={tab}
            onClick={() => setTimeFilter(tab)}
            className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all ${timeFilter === tab ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-8 px-1">
        <span className="text-xs font-semibold text-gray-500 flex items-center">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Updated 7 mins ago
        </span>
        <button className="bg-stone-200/60 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center">
          <Globe size={14} className="mr-1" />
          Global
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>

      {/* Top 3 Podium */}
      <div className="flex justify-center items-end mb-10 h-48 gap-2">
        {/* Rank 2 */}
        <div className="flex flex-col items-center w-1/3 z-10">
          <div className="relative mb-2">
            <div className={`w-20 h-20 rounded-full border-4 border-slate-300 flex items-center justify-center text-3xl text-white font-bold ${topThree[0].color}`}>
              {topThree[0].initial}
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
              <Trophy size={12} className="mr-1" /> #2
            </div>
          </div>
          <div className="text-center mt-3">
            <div className="font-bold text-gray-800 text-sm truncate w-24">{topThree[0].name}</div>
            <div className="text-xs font-semibold text-gray-600">{topThree[0].count} Japa</div>
            <div className="text-[10px] text-gray-400 truncate w-24">{topThree[0].location}</div>
          </div>
        </div>

        {/* Rank 1 */}
        <div className="flex flex-col items-center w-1/3 z-20 -mt-6">
          <div className="text-green-400 mb-1">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div className="relative mb-2">
            <div className="w-28 h-28 rounded-full border-4 border-orange-400 overflow-hidden shadow-lg shadow-orange-200">
              <img src={topThree[1].image} alt={topThree[1].name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center shadow-md border-2 border-white">
              <Trophy size={14} className="mr-1" /> #1
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="font-bold text-gray-800 text-base truncate w-28">{topThree[1].name}</div>
            <div className="text-sm font-semibold text-gray-600">{topThree[1].count} Japa</div>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="flex flex-col items-center w-1/3 z-10">
          <div className="relative mb-2">
            <div className="w-20 h-20 rounded-full border-4 border-orange-200 overflow-hidden shadow-md">
              <img src={topThree[2].image} alt={topThree[2].name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-rose-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md border-2 border-white">
              <Trophy size={12} className="mr-1" /> #3
            </div>
          </div>
          <div className="text-center mt-3">
            <div className="font-bold text-gray-800 text-sm truncate w-24">{topThree[2].name}</div>
            <div className="text-xs font-semibold text-gray-600">{topThree[2].count} Japa</div>
            <div className="text-[10px] text-gray-400 truncate w-24">{topThree[2].location}</div>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {others.map(user => (
          <div key={user.rank} className="bg-white rounded-full p-3 px-5 flex items-center shadow-sm border border-orange-50">
            <div className="text-gray-800 font-bold w-6 text-lg">{user.rank}</div>
            <div className="mr-4">
              {user.image ? (
                <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${user.color}`}>
                  {user.initial}
                </div>
              )}
            </div>
            <div className="flex-1 font-bold text-gray-800">{user.name}</div>
            <div className="font-bold text-gray-800">{user.count} <span className="text-xs font-semibold">Japa</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
