import React, { use, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

//   Get current user
//  onAuthStateChanged(auth, (currentUser) => {
//     if (currentUser) {
//       console.log('User state changed:', currentUser);
//     }else {
//       console.log('No user is signed in.');
//     }
//   });

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          console.log('User state changed:', currentUser);
        }else {
          console.log('No user is signed in.');
          setUser(createUser);
        }
      });
      return () => {
        unsubscribe();
      };
    }, []);

  const authInfo = {
    user: user,
    createUser: createUser,
    signIn: signIn
 };
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                 {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;