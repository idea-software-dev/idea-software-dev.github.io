import { defineStore } from 'pinia';
import axios from 'redaxios';
import router from './../router'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        token: localStorage.getItem('token'),
        isAuthenticated: localStorage.getItem('isAuthenticated'),
        user: JSON.parse(localStorage.getItem('user')),
        progress: localStorage.getItem('progress'),
        returnUrl: null
    }),
    actions: {
        async logout(path) {
            this.user = null;
            this.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('progress');
            window.location.href = path
        }
    }
})