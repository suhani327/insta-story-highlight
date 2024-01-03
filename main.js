arr = [
    {
        dp: " https://images.unsplash.com/photo-1543590433-0421aace00b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1620857493580-d9e5e05ce467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGdpcmx8ZW58MHx8MHx8fDI%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1620857493580-d9e5e05ce467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGdpcmx8ZW58MHx8MHx8fDI%3D",
        story: "https://images.unsplash.com/photo-1676020068743-b95b81e75f4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGdpcmx8ZW58MHx8MHx8fDI%3D"

    },
    {
        dp: "https://images.unsplash.com/photo-1543132685-cd95dd76c03d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1dGUlMjBnaXJsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1612643502853-ac8808042d1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjBnaXJsfGVufDB8fDB8fHwy"

    },

    {
        dp: "https://images.unsplash.com/photo-1676020068743-b95b81e75f4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGdpcmx8ZW58MHx8MHx8fDI%3D",
        story: "https://images.unsplash.com/photo-1515049211820-b3adaa5f3d19?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }
    , {
        dp: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGdpcmx8ZW58MHx8MHx8fDI%3D"
        , story: "https://images.unsplash.com/photo-1599605304617-83631c77cb45?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGN1dGUlMjBnaXJsfGVufDB8fDB8fHwy"
    }]
    var clutter="";
    arr.forEach(function(elem,index){
         clutter+=`<div  class="story">
         <img id="${index}" src="${elem.dp}"
             alt="">
     </div>`
     
    } )
    
     var stories=document.querySelector(".stories");
     stories.innerHTML=clutter;
      var full_screen=document.querySelector("#full_screen");
     stories.addEventListener("click",function(dets){

full_screen.style.display="block";
full_screen.style.backgroundImage=`url(${arr[dets.target.id].story})`;
 setTimeout(function(){
full_screen.style.display="none";
     },4000)
     })
     var name="suhani";
console.log(`the name of the candidate is ${name}`);
console.log("the name of the candidate is "+ name);