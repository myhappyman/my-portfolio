import { getDatabase, ref, onValue } from "firebase/database";
import { firestore } from "./firebase-config";

export const contacts = firestore.collection("contacts");
