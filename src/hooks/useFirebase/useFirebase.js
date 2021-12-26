import initializeAuthentication from './../../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


initializeAuthentication()
const useFirebase = () =>{
     const auth = getAuth();
     const registerUser = (email, password) =>{
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
               });
     }




     return{
          registerUser,
          
     }
     
}

export default useFirebase