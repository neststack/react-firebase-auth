import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//////////////////////////////////////////////
/* Please add your firebaseConfig settings to make this work
They'll look like this>

  const firebaseConfig = {
    apiKey: 'adadsada2dav',
    authDomain: '*****.firebaseapp.com',
    projectId: 'ffakjndfjkaf',
    storageBucket: 'asgadahdhad',
    messagingSenderId: 'ahdhadfa',
    appId: 'afhadfsfasfs',
  };
*/
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
