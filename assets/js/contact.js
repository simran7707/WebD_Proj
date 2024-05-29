
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Paste the code from Firebase
const firebaseConfig2 = {

apiKey: "AIzaSyDOBsCPUHMPOMIZ68af7t2MDcb5DtR4pwo",
authDomain: "restaurant3-869c5.firebaseapp.com",
databaseURL: "https://restaurant3-869c5-default-rtdb.firebaseio.com",
projectId: "restaurant3-869c5",
storageBucket: "restaurant3-869c5.appspot.com",
messagingSenderId: "734550891195",
appId: "1:734550891195:web:971b03a6b69e1e5831279e"
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig2);

// Get a reference to the database service
const db1 = getDatabase(app2);

document.getElementById('frmCont').addEventListener('submit', function(k) {
k.preventDefault();
set(ref(db1, 'users/' + Math.random().toString(36).slice(2, 7)), {
fullname: document.getElementById('a').value,
emailid: document.getElementById('b').value,
event_location: document.getElementById('c').value,
event_date: document.getElementById('d').value,
phone_no: document.getElementById('e').value,
message_for_us: document.getElementById('f').value,

});

alert('Your form is submitted');
document.getElementById('frmCont').reset();
});
