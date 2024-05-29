

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

  
   
    const firebaseConfig1 = {
        apiKey: "AIzaSyBLk0bb6p_SoielxY95j4BQ_Vo141ZZhhk",
  authDomain: "restaurant-website-data.firebaseapp.com",
  projectId: "restaurant-website-data",
  storageBucket: "restaurant-website-data.appspot.com",
  messagingSenderId: "249155297812",
  appId: "1:249155297812:web:03c195299859e83e81fd01",
  measurementId: "G-YCK8K3J63B"

    };

    // Initialize Firebase
    const apps = initializeApp(firebaseConfig1);
    const auth = getAuth(apps);
    
    document.getElementById("signup").addEventListener('click',function(){
        const email = document.getElementById("email").value 
        const password=document.getElementById("pass").value 

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("created")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode + errorMessage);
  });

    })



    var res = "true";
function validation(){
    //   var username = document.getElementById('email').value;
       var Emails = document.getElementById('email').value;
     var Passwords = document.getElementById('pass').value;
       var confirmPassword = document.getElementById('confirm_Password').value;

       var usernamecheck = /^[A-Za-z ]{3,30}$/;
        var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        var emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
//      if(usernamecheck.test(username)){
//          document.getElementById('usernameerror').innerHTML = " ";
         
//    }
//     else{
//       document.getElementById('usernameerror').innerHTML = "**Username must be of at least 3 character long and max of 30 characters ";
//       res = "false"; 
//       return res;

//  }
 if(emailcheck.test(Emails)){
    document.getElementById('emailerror').innerHTML = " ";
  
    
   }
 else{
     document.getElementById('emailerror').innerHTML = "**Please enter a valid email"; 
     res = "false"; 
      return res;
 }

     if(emailcheck.test(Emails)){
        document.getElementById('emailerror').innerHTML = " ";
      
        
       }
     else{
         document.getElementById('emailerror').innerHTML = "**Please enter a valid email"; 
         res = "false"; 
          return res;
     }
        if(passwordcheck.test(Passwords)){
            document.getElementById('pass').innerHTML = " ";
           
      }
       else{
           document.getElementById('pass').innerHTML = "**Password must be of at least 8 characters and should contain a special character and a numerical value "; 
           res = "false"; 
          return res;
       }

    //  not in use
     
     
       if(Passwords.match(confirmPassword)){
            document.getElementById('cpassworderror').innerHTML = " ";
           
       }
       else{
           document.getElementById('passworderror').innerHTML = "**Password must be of at least 8 characters and should contain a special character and a numerical value "; 
           res = "false"; 
          return res;
       }

      if(Passwords.match(confirmPassword)){
            document.getElementById('cpassworderror').innerHTML = " ";
           
       }
      else{
         document.getElementById('cpassworderror').innerHTML = "**Does mot match with your password "; 
         res = "false"; 
          return res; 
       }

    

    }
  