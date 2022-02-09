export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'dev-b7ths2an.us.auth0.com'
export const clientId = 'glXQ2lBOMkhnGGdXTJNchjGebJJK9yvt'
export const audience = 'https://DaVinki.com'

export const firebaseConfig = {
  apiKey: "AIzaSyCpWVCOTxJHg-_X3UUaUe-tg8PYHFBXQO4",
  authDomain: "davinki-c6a76.firebaseapp.com",
  projectId: "davinki-c6a76",
  storageBucket: "davinki-c6a76.appspot.com",
  messagingSenderId: "837566518810",
  appId: "1:837566518810:web:a4d733e3823e6bf33ae3a3",
  measurementId: "G-P8RJLLGD55"
};