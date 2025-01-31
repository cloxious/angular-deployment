import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getStorage, provideStorage } from "@angular/fire/storage";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "green-brownies",
        appId: "1:208786103527:web:743d64bbef2266c4ca1642",
        storageBucket: "green-brownies.appspot.com",
        apiKey: "AIzaSyCDklSxBKoFGBXVAgSlwBhgNzrr6PoUgdE",
        authDomain: "green-brownies.firebaseapp.com",
        messagingSenderId: "208786103527",
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
