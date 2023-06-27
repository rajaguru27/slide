var image=document.querySelectorAll(".image");
 var right=document.getElementById("right-icon");
 var left=document.getElementById("left-icon");


var i=1;
showSlide(i);

right.addEventListener("click",function(){
    showSlide((i+=1));
});
left.addEventListener("click",function(){
    showSlide((i-=1));
});

function showSlide(n){
    if(n>image.length){
        i=1;
    }
    if(n<1){
        i=image.length;
    }
    for(let j=0;j<image.length;j++){
        image[j].style.display="none";
    }
    image[i-1].style.display="block";
}

