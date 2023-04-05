import { DocumentData } from "firebase/firestore";
import { firestore } from "./firebase-config";

export interface IDocumentData {
  data: DocumentData;
  id: string;
}

// ChatGpt를 활용하여 소스 리팩토링
// 해당 함수는 Firestore에서 CollectionName으로 전달된 이름의 컬렉션을 가져와서 orderName으로 전달된 이름의 필드를 기준으로 정렬한 후, 해당 컬렉션의 모든 문서를 가져와서 IDocumentData[] 형태로 반환합니다.
export const getStoreToData = async (
  CollectionName: string,
  orderName: string
): Promise<IDocumentData[]> => {
  // IDocumentData[] 형태의 빈 배열을 생성합니다.
  const array: IDocumentData[] = [];
  // Firestore에서 CollectionName으로 전달된 이름의 컬렉션을 가져옵니다.
  const collection = firestore.collection(CollectionName);
  // 해당 컬렉션의 모든 문서를 orderName으로 전달된 이름의 필드를 기준으로 정렬한 후 가져옵니다.
  const docs = await collection.orderBy(orderName).get();
  // 가져온 모든 문서에 대해서 반복문을 실행합니다.
  docs.forEach((doc) => {
    // 만약 해당 문서가 존재한다면, IDocumentData 형태로 변환하여 array에 추가합니다.
    if (doc.exists) {
      array.push({ data: doc.data(), id: doc.id });
    }
  });
  // 모든 문서에 대한 IDocumentData[] 형태의 배열을 반환합니다.
  return array;
};
