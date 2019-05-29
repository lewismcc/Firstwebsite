/// <reference path="../../typings/globals/jquery/index.d.ts"/>

function ButtonOneClicked(){
    alert("Hello there");
}
/*The above function shows an alert that is run through a button click */
/*The below function shows a link menu and each option of the menu brings you to a different website */
function OpenPage(){
    var temp = document.getElementById("LinkMenu").value;
    if(temp == "Google" ){
        window.open("https://www.google.com/");
    }else if(temp == "Youtube"){
        window.open("https://www.youtube.com/");
    }else if(temp == "Facebook"){
        window.open("https://www.facebook.com/");
    }else if(temp == "Instagram"){
        window.open("https://www.instagram.com/")
    }   
}
 var myVar;
function TextButton(){
    myVar = setInterval(colorFunc, 100);
}
 function colorFunc() {
     var text = document.getElementById("evil")
    if(text.style.color == "red"){
        text.style.color = "blue"
    }else if(text.style.color =="blue"){
        text.style.color= "red"
    }else{
        text.style.color = "red"
    }
 }
 /*The above function switch's the colour of the text within the paragraph with the id evil between red and blue using the set interval function */ 
 /*The below function  stops the colour switching of the textButton function*/
 function TextStop(){
    clearInterval(myVar);
    text.style.color =="0000000";
 }
 function imageButton1(){
    Picture.src ="./images/masterchief1.jpg"; 
 }
 function imageButton2(){
    Picture.src= "./images/masterchief2.jpg";
 }
 function imageButton3(){
    Picture.src="./images/masterchief3.jpg";
 }
//selector syntax 
//$ ( " selector")
$(document).ready(function(){
    //this means that the instructions will be loaded up when the document has finished building
    //the dom is ready for accessing
    $("#reset").click(function(){ 
        $("#bounce").animate({left: "0",height:"100px", width:"50px"})
        $("#bounce").animate({top: "0",height:"100px", width:"50px"});
        $("#bounce2").animate({left: "50px",height:"100px", width:"50px"})
        $("#bounce2").animate({top: "0", height:"100px", width:"50px"});
    });

    $("#buttonClick").click(function(){
        //$(textParagraph).toggle();
        $("#bounce").animate({left: "400px"}, "slow");
        $("#bounce2").animate({left: "450"}, "slow");
        $("#bounce").animate({top: "400"}, "slow");
        $("#bounce2").animate({top: "400"}, "slow");
        //This is the splitting point
        $("#bounce").animate({backgroundColor: "#eeaad8", left:"000"}, "slow");
        $("#bounce2").animate({backgroundColor: "#bfaaee",left:"800"}, "slow");
        $("#bounce").animate({top: "0px", backgroundColor: "#eee8aa"}, 625);
        $("#bounce2").animate({top: "0px", left:"50px", backgroundColor:"#eee8aa"}, "slow");        
    });
    $("#change").click(function(){
        $("#bounce").animate({left:"300px"},"slow");
        $("#bounce2").animate({left:"350px"},"slow");
        $("#bounce").animate({left: "200px"},"slow");
        $("#bounce2").animate({left: "450px"},"slow");
        $("#bounce").animate({left:"290px", height:"130px", width:"20px"}, "fast");
        $("#bounce").animate({height:"130px", width:"20px"},"fast");
        $("#bounce").text("it");
        $("#bounce2").animate({left:"300px"}) 
    })

});
