// angular.module('cum',['ngRoute', 'ngAnimate']).
// 	config(function $routeProvider{
// 		 $routeProvider.
// 		 when("/",{templateUrl:"/secciones/main.html"})
// 	})
function maincontroller(e){e.person={name:"Jonathan"}}var app=angular.module("cum",["ngRoute","ngAnimate"]);app.config(function(e){e.when("/",{templateUrl:"/secciones/main.html",controller:"maincontroller"}).when("/muebleria",{templateUrl:"/secciones/muebleria.html"}).when("/catalogo",{templateUrl:"/secciones/catalogo.html"}).when("/contacto",{templateUrl:"/secciones/contacto.html"}).when("/atilio-cum",{templateUrl:"/secciones/atilio-cum.html"})}).run(function(e){e.$on("$viewContentLoaded",function(){$(document).foundation("orbit",{slide_number:!1,timer_speed:5e3});$(document).ready(function(){$("#foo0").carouFredSel({items:2,direction:"left",scroll:{items:1,easing:"elastic",duration:1e3,pauseOnHover:!0},prev:{button:function(){return $(this).parent().siblings(".prev")}},next:{button:function(){return $(this).parent().siblings(".next")}}})});frm=$("#contactform");$(".sendbutton").click(function(){alert(":C");datos=frm.serialize();$.ajax({type:frm.attr("method"),url:"enviar.php",data:frm.serialize(),success:function(e){$("#contactform").hide("slow");$(".fcontacto").html(e)}})})})});