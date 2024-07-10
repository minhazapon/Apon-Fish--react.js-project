import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const fireContext = createContext(null)

      const GProvider = new GoogleAuthProvider()

const AuthContext = ({children}) => {

      const [user, setUser] = useState(null)

      const createUser = (email, password) =>{
        return  createUserWithEmailAndPassword(auth, email, password)
      }
      
      const SignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
      }

      const GUP = () =>{
        return signInWithPopup(auth, GProvider )
      }

      const logOut = () =>{
        signOut(auth)

      }


      useEffect( () =>{
      const unSubscribe = onAuthStateChanged( auth, currentUser  =>{
        setUser(currentUser)
        console.log(currentUser)

      })
        return()=>{
          unSubscribe();
        }

      } , [])






      const authInfo = { user, createUser, SignIn , GUP, logOut  }

    return (
        <div>

            <fireContext.Provider value={authInfo}>

               {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;