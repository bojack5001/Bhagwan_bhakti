import { create } from 'zustand';

interface AppState {
  japaCount: number;
  dailyGoal: number;
  streak: number;
  incrementJapa: () => void;
  resetJapa: () => void;
  setDailyGoal: (goal: number) => void;
}

export const useStore = create<AppState>((set) => ({
  japaCount: 63,
  dailyGoal: 108,
  streak: 5,
  incrementJapa: () => set((state) => ({ japaCount: state.japaCount + 1 })),
  resetJapa: () => set({ japaCount: 0 }),
  setDailyGoal: (goal) => set({ dailyGoal: goal }),
}));
