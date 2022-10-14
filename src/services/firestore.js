// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG8nCWeLApY50WUriJ9rFIeptzgVuWqpI",
  authDomain: "burgerqueen-app-7915d.firebaseapp.com",
  projectId: "burgerqueen-app-7915d",
  storageBucket: "burgerqueen-app-7915d.appspot.com",
  messagingSenderId: "52748863672",
  appId: "1:52748863672:web:92281639f05e529cc98c4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const getProducts = async (cate)=>{
  try {
    const collectionRef = collection(firestore, 'productos');
    const qry = cate ? query(collectionRef, where('category', '==', cate)) : collectionRef; 
    const snapshot = await getDocs(qry);
    
    const data = snapshot.docs.map((document) => ({
      ...document.data(),
      id: document.id
    }));
    if (data.length === 0) {
      throw new Error('No hemos encontrado resultados.');
    }
    /* console.log(data) */
    return data;
  } catch (error) {
    if (error.name === 'FirebaseError') {
      throw new Error('Ha ocurrido un error inesperado, intenta refrescar la página.');
    }
    throw error;
  }

  

}
export const getProductById = async (id)=>{
  try {
    const docRef = doc(firestore, 'productos', id);  
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) {
      throw new Error('El producto no está disponible o no existe.');
    }

    return {...docSnapshot.data(), id: docSnapshot.id};

  } catch (error) {
    if (error.name === 'FirebaseError') {
      throw new Error('Ha ocurrido un error inesperado, intenta refrescar la página.');
    }
    throw error;
  }
}

/* export default firestore; */