"use client"

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile  } from "firebase/auth";
import { auth } from "../lib/firebase";


const { createContext, useState, useEffect, useContext } = require("react")


const provider = new GoogleAuthProvider();

 export const AuthContext = createContext();



 export const AuthProvider = ({children}) =>{

    const [user, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [blogallcategory, setblogallcategory] = useState([]);
    const [allblogs, setblogs] = useState([])
    const [allCategoryService, setallCategoryService] = useState([])
    const [allServiceName, setServiceName] = useState([])
    const [AllprocessData, setAllprocessData] = useState([])
    const [Allprocesstitletext, setAllprocesstitletext] = useState([])
    const [aboutalldata, setaboutalldata] = useState([])
    const [careerAllcategory, setcareerAllcategory] = useState([])



    // fetch all blog category

    // useEffect(()=>{

    //     fetch("http://localhost:3000/api/blogsapi/blogCategoryApi")
    //     .then(res => res.json())
    //     .then(data =>{
    //         setblogallcategory(data)
            
    //     })


    // },[])





    // create user with email and password

    const handleSignUpWithEamil = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // sign in with email

    const  handleSignInWithEmail = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out 

    const handleSignOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    // sign in with google


    const handleGoogleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    // user profile update

    const UserProfileUpdate = (updatedDate) =>{
        return updateProfile(auth.currentUser,updatedDate)
    }


    // email verficication check



    const userInfo = {

        
        user, setUsers,
        loading, setLoading,
        handleSignUpWithEamil,
        handleSignInWithEmail,
        handleSignOut,
        handleGoogleSignIn,
        UserProfileUpdate,
        blogallcategory, 
        setblogallcategory,
        allblogs, setblogs,
        allCategoryService, setallCategoryService,
        allServiceName, setServiceName,
        AllprocessData, setAllprocessData,
        Allprocesstitletext, setAllprocesstitletext,
        aboutalldata, setaboutalldata,
        careerAllcategory, setcareerAllcategory

    }

    


    useEffect (() => {

       const unsubscribe = onAuthStateChanged(auth, (currentuser) =>{
            if(currentuser){
                setUsers(currentuser);
                
            }else{
                setUsers(null);
            }
            setLoading(false)
        }) 
        return () => unsubscribe()


    },[])


    
      



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
 }


 export const useAuth = () => useContext(AuthContext)