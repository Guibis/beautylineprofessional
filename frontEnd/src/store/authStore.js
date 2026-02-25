import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      token: null,

      login: async (email, password) => {
        try {
          const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || 'Errore durante il login');
          }

          set({ 
            isLoggedIn: true, 
            token: data.token,
            user: data.user
          });
          return { success: true };
        } catch (err) {
          return { success: false, message: err.message };
        }
      },

      register: async (name, email, password) => {
        try {
          const response = await fetch(`${API_URL}/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || 'Errore durante la registrazione');
          }

          // After registration, we login automatically with the user data
          // (Backend createUser currently returns the saved user without password)
          set({ 
            isLoggedIn: true, 
            user: data
          });
          return { success: true };
        } catch (err) {
          return { success: false, message: err.message };
        }
      },

      logout: () => {
        set({ isLoggedIn: false, user: null, token: null });
        localStorage.removeItem('auth-storage');
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
