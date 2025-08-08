import { create } from 'zustand';
import axios from 'axios';

interface AuthState {
  user: any | null;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  fetchUser: async () => {
    const token =
      document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1') ||
      sessionStorage.getItem('token');

    if (token) {
      try {
        const response = await axios.get('/api/users/me', {
          headers: { Authorization: `JWT ${token}` },
        });
        set({ user: response.data.user });
      } catch (error) {
        set({ user: null });
      }
    } else {
      set({ user: null });
    }
  },

  logout: async () => {
    try {
      await axios.post('/api/users/logout');
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      sessionStorage.removeItem('token');
      set({ user: null });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  },
}));