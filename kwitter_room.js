
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC-Y5mskec2EkHqCuxPKrV9IuRCAmobIGo",
    authDomain: "kwitter-aa96d.firebaseapp.com",
    databaseURL: "https://kwitter-aa96d-default-rtdb.firebaseio.com",
    projectId: "kwitter-aa96d",
    storageBucket: "kwitter-aa96d.appspot.com",
    messagingSenderId: "526924180941",
    appId: "1:526924180941:web:b32f46db675b3fb6e92884",
    measurementId: "G-T7EZQHWFS4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

