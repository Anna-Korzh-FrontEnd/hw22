"use strict";

//1:

$("#form-select").on("change",  function (event){

 if(event.target.value === "square")
 $('#figures').removeAttr('class').addClass('img-square').css({'display':'none'}).animate( {height: 'show'});

  else if(event.target.value === "circle")
  $('#figures').removeAttr('class').addClass('img-circle').css({'display':'none'}).animate( {height: 'show'});

  else if(event.target.value === "rectangle")
  $('#figures').removeAttr('class').addClass('img-rectangle').css({'display':'none'}).animate( {height: 'show'});
} ) 
$("#head").on("input",  function (event){
    $('#figures').css({"background-color": event.target.value, opacity: 1}).animate( {opacity:0.5});
   } ) 
   


  