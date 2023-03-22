import { DocumentData } from "firebase/firestore";
import { firestore } from "./firebase-config";

export interface IDocumentData {
  data: DocumentData;
  id: string;
}

export const getStoreToData = (
  CollectionName: string,
  orderName: string
): IDocumentData[] => {
  const array: IDocumentData[] = [];
  const collection = firestore.collection(CollectionName);
  collection
    .orderBy(orderName)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists) {
          array.push({ data: doc.data(), id: doc.id });
        }
      });
    });
  return array;
};
