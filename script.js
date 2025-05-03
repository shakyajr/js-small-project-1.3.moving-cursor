var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var h1 = document.querySelector("h1")

main.addEventListener("mousemove",function(dets){

   cursor.style.left = (dets.x + 20) +"px"   
   cursor.style.top = (dets.y + 20) +"px"

})

h1.addEventListener("mouseenter",function(){
    cursor.style.scale = 3
})

h1.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
})
