
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
    import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
    
    // Paste the code from Firebase
    const firebaseConfig = {
    apiKey: "AIzaSyCwhMak-DJaDi9vQkNLtAT3dWY-IgVMpuU",
    authDomain: "restaurant-2-website.firebaseapp.com",
    projectId: "restaurant-2-website",
    storageBucket: "restaurant-2-website.appspot.com",
    messagingSenderId: "77602824935",
    appId: "1:77602824935:web:e048ff13275bf3e79eb842"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    // Get a reference to the database service
    const db = getDatabase(app);
    
    document.getElementById('frmContact').addEventListener('submit', function(e) {
    e.preventDefault();
    set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
    fullname: document.getElementById('fullname').value,
    emailid: document.getElementById('email').value,
    Phone_No: document.getElementById('phone-no').value,
    No_of_person: document.getElementById('Number-off-Person').value,
    time: document.getElementById('Time').value,
    date: document.getElementById('Time').value,
    message: document.getElementById('message').value
    });
    
    alert('Your form is submitted');
    document.getElementById('frmContact').reset();
    });
    