
// Firebase config интегриран с реален проект
var firebaseConfig = {
  apiKey: "AIzaSyA1Oi7dpAT5Fg6ps0UsfgL3FBlDGcNJR4c",
  authDomain: "cybersecurity-662ef.firebaseapp.com",
  projectId: "cybersecurity-662ef",
  storageBucket: "cybersecurity-662ef.firebasestorage.app",
  messagingSenderId: "706923828076",
  appId: "1:706923828076:web:b943396e94300364995949",
  measurementId: "G-91S1VN942T"
};
// Инициализация
firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.firestore();
