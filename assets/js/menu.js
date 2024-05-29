
 
fetch("one.json")
    .then((response)=>response.json())
    .then((json)=>{
        let btn= document.getElementById('bn');
        let states= document.getElementById('ab');
        let season= document.getElementById('meal');
        let a =season.value;
        let temp=document.getElementById('temp');
        let b= document.getElementById('ideal');
        let textarea= document.getElementById('ses');
        btn.addEventListener('click' , function(){
          //console.log("hello")
          json.forEach(element => {
            if(states.value==element.name)
            {
                temp.value=element.itemasked;
                b.value=element.menu;
                textarea.value=season.value;


            }
          })
          
        })
    })
    
