 console.log("hello ");
//   <script src=
//   "https://restaurant-website-data-default-rtdb.firebaseio.com/">
//       </script>
//show and hide dropdown list item on button click  
function show_hide() {  
 var click = document.getElementById("list-items");  
 if(click.style.display ==="none") {  
    click.style.display ="block";  
 } else {  
    click.style.display ="none";  
 }   
} 
//  toggle

let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");

btn.onclick = function (){
  if(icon.classList.contains("fa-bars")){
      icon.classList.replace("fa-bars", "fa-times");
  }
  else{
      icon.classList.replace("fa-times", "fa-bars");
  }
}

