// document.querySelector('#center')
// addEventlistener("mousemove", function(dets){
//     console.log(dets.clientX, dets.clientY);
    
// })


const throttleFunction = (func, delay)=>{
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        
        if(now - prev > delay) {
            prev = now;
            return func(...args);
        }
        
    };
};
document.querySelector("#center").addEventListener(
    "mousemove",

throttleFunction((dets) => {
    
    // your less repeatation code
   var div = document.createElement("div");
   div.classList.add('imagediv');
   div.style.left = dets.clientX+ 'px';
   div.style.top = dets.clientY+ 'px';
   
    var img = document.createElement("img");
    // img.setAttribute("src",https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    img.setAttribute("src","Ajay.jpg");
    div.appendChild(img);
   document.body.appendChild(div);

   gsap.to(img,{
   y: "0",
    ease: Power1,
    duration: .2,
   });
   
   gsap.to(img,{
   y: "100%",
   delay: .6,
    ease: Power2,
    
   });

   setTimeout(function(){
    div.remove();
   }, 2000)
    

    
}, 400)
    
);