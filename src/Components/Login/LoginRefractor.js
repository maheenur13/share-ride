// import firebase from "firebase/app";
// import firebaseConfig from './firebase.config';
// // Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// export const initializeLogin=()=>{
//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//     } else {
//         firebase.app(); // if already initialized, use that one
//     }
// }

// export const handleGoogleSignIn = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     console.log('google clicked');
//     return firebase.auth()
//         .signInWithPopup(googleProvider)
//         .then((result) => {
//             var credential = result.credential;

//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             const newUserInfo = { ...user };
//             newUserInfo.name=user.displayName;
//             setUser(newUserInfo);
//             setLoggedInUser(newUserInfo);
//             history.replace(from);
//             // history.push('/home');
//             console.log(user);
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorMessage);
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });

// }

//  export const handleFbSignIn = () => {
//         const fbProvider = new firebase.auth.FacebookAuthProvider();
//         firebase
//             .auth()
//             .signInWithPopup(fbProvider)
//             .then((result) => {
//                 var credential = result.credential;
                

//                 // The signed-in user info.
//                 const fbUser = result.user;
//                 const newUserInfo = { ...user };
//                 newUserInfo.name=fbUser.displayName;
//                 setUser(newUserInfo);
//                 setLoggedInUser(newUserInfo);
//                 history.replace(from);
//                 // history.push('/home');
//                 console.log('faceeeeeeeeeeeeboook user',fbUser);
//                 // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//                 var accessToken = credential.accessToken;

//                 // ...
//             })
//             .catch((error) => {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log(errorMessage);
//                 // The email of the user's account used.
//                 var email = error.email;
//                 // The firebase.auth.AuthCredential type that was used.
//                 var credential = error.credential;

//                 // ...
//             });
//     }


// export const createUserWithEmailAndPass=()=>{
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//                 .then((userCredential) => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = '';
//                     newUserInfo.success = true;
//                     setUser(newUserInfo);
//                     updateUserInfo(user.name);

//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = error.message;
//                     newUserInfo.success = false;
//                     setUser(newUserInfo);
//                     // var errorCode = error.code;
//                     var errorMessage = error.message;
//                     console.log(errorMessage);
//                     // ..
//                 });
// }


// export const signInUserWithEmailAndPass=()=>{
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//                 .then(res => {
//                     // Signed in
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = '';
//                     newUserInfo.success = true;
//                     setUser(newUserInfo);
//                     setLoggedInUser(newUserInfo);
//                     history.replace(from);
//                     history.push('/home');
//                     console.log('Sing in user',res.user)
//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = error.message;
//                     newUserInfo.success = false;
//                     setUser(newUserInfo);
//                 });
// }

// const updateUserInfo = name => {
//     const updateUser = firebase.auth().currentUser;

//     updateUser.updateProfile({
//         displayName: name,
//         // photoURL: "https://example.com/jane-q-user/profile.jpg"
//     }).then(() => {
//         // Update successful.
//         console.log('uner Info updated Successfully!')
//     }).catch(error => {
//         // An error happened.
//         console.log(error);
//     });
// }