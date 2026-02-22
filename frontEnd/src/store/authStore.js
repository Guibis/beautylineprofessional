import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: (email) => {
        // Basic simulation for frontend demo
        set({ isLoggedIn: true, user: { email, name: email.split('@')[0] } });
      },
      register: (name, email) => {
        // Basic simulation for frontend demo
        set({ isLoggedIn: true, user: { name, email } });
      },
      logout: () => {
        set({ isLoggedIn: false, user: null });
      },
      updateUser: (newData) => {
        set((state) => ({ user: { ...state.user, ...newData } }));
      }
    }),
    {
      name: 'auth-storage',
    }
  )
);
