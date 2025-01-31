import { Injectable } from "@angular/core";
import { collection, Firestore, getDocs } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}
}
