import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBw3sOQo5mCXpiOF79O7yIfOGj-nkJPekc',
  authDomain: 'api-pet.firebaseapp.com',
  projectId: 'api-pet',
  storageBucket: 'api-pet.appspot.com/db.json',
  messagingSenderId: '794424049503',
  appId: '1:794424049503:web:a27499c021e627e92d40ea',
  measurementId: 'G-MRQFZ7R7P3'
}

export const app = initializeApp(firebaseConfig)
export const db = getStorage(app)
