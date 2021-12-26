import initializeAuthentication from './../../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,updateProfile ,signOut  } from "firebase/auth";
import { useEffect, useState } from 'react';


initializeAuthentication()
const useFirebase = () =>{

     const [user,setUser] = useState({})
     const [isLoading,setIsLoading] = useState(true)
     const [error,setError] = useState("")
     const auth = getAuth();

     // Register a user
     const registerUser = (email, password,name,history) =>{
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const newUser = {email, displayName:name}
                    setUser(newUser)
                    setError("")
                    updateProfile(auth.currentUser, {
                         displayName: name
                       }).then(() => {
                       }).catch((error) => {
                       });
                       console.log()
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    setError(errorMessage)
               })
               .finally (() => setIsLoading(false))
     }

     // user sign out
     const userSignOut = () =>{
          setIsLoading(true)
          signOut(auth).then(() => {
             }).catch((error) => {
               setError(error.message)
             })
             .finally (() => setIsLoading(false))
     }


      // observe user presence
      useEffect(()=>{
          const unsubscribed = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user)
               } else {
                    setUser({})
               }
               setIsLoading(false)
             });
             return () => unsubscribed
     },[])




     return{
          registerUser,
          userSignOut,
          user,
          isLoading,
          error,
     }
     
}

export default useFirebase