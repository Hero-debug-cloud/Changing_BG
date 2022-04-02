flex_changing();
function flex_changing(){
    // console.log("flex");
    document.getElementById("change-color").innerHTML="#F1f5f8";
    document.getElementById("change").style.backgroundColor="#F1f5f6";
    var b=document.getElementById("btn");
    b.addEventListener('click',function(){
     var arr=[1,2,3,4,5,6,"A","B","C","D","E","F"];
       var bg_color="";
       for(var i=0;i<6;i++){
       bg_color+=""+arr[Math.floor(Math.random()*arr.length)];
        }
        document.getElementById("change-color").innerHTML="#"+bg_color;
        document.getElementById("change").style.backgroundColor="#"+bg_color;
    });
}


var simple=document.getElementById("simple-change");
simple.addEventListener('click',simple_changing);
var flex=document.getElementById("change-flex");
flex.addEventListener('click',flex_changing);



function simple_changing(){
    // console.log("Simple");
    var c=document.getElementById("change-color").innerHTML="white";
    var b=document.getElementById("btn");
    b.addEventListener('click',function(){
       var arr1=["red","blue","green","purple","orange","pink","black","yellow"];
       var bg1=arr1[Math.floor(Math.random()*arr1.length)];
       document.getElementById("change-color").innerHTML=bg1;
       document.getElementById("change").style.backgroundColor=bg1;
    });
}