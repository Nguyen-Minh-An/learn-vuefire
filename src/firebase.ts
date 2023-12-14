// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBaX430hyKIgZMy4C8YOgBwFH0p1mbN0RQ',
  authDomain: 'learn-vuefire-minhan.firebaseapp.com',
  projectId: 'learn-vuefire-minhan',
  storageBucket: 'learn-vuefire-minhan.appspot.com',
  messagingSenderId: '139033675970',
  appId: '1:139033675970:web:87ceed3eeaa695ccff535b',
  measurementId: 'G-3V89SZ6PTW'
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
