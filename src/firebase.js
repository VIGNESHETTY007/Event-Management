import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNgT1V8ERB0pvAzSdBUd8ZLBTShg0UUy0",
  authDomain: "event-management-system-20883.firebaseapp.com",
  projectId: "event-management-system-20883",
  storageBucket: "event-management-system-20883.appspot.com",
  messagingSenderId: "1029044487109",
  appId: "1:1029044487109:web:2eed95e94dacda4e1581ac",
  measurementId: "G-F9837SYE9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
