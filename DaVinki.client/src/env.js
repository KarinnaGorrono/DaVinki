export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'dev-b7ths2an.us.auth0.com'
export const clientId = 'glXQ2lBOMkhnGGdXTJNchjGebJJK9yvt'
export const audience = 'https://DaVinki.com'

export const firebaseConfig = {
  apiKey: "AIzaSyCJLBCLNoi-RSqbbsgVe_WMUlXziXBf1aQ",
  authDomain: "da-vinki.firebaseapp.com",
  projectId: "da-vinki",
  storageBucket: "da-vinki.appspot.com",
  messagingSenderId: "979507070213",
  appId: "1:979507070213:web:082df3953dff82a793636c",
  measurementId: "G-ZC0RZVNT7C"
};
