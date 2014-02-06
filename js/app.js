// angular.module('cum',['ngRoute', 'ngAnimate']).
// 	config(function $routeProvider{
// 		 $routeProvider.
// 		 when("/",{templateUrl:"/secciones/main.html"})
// 	})

var app = angular.module('cum', ['ngRoute', 'ngAnimate']);

app.
	config(function ($routeProvider){
		 $routeProvider.
		 when("/",{templateUrl:"/secciones/main.html", controller: "maincontroller"}).
		 when("/muebleria",{templateUrl:"/secciones/muebleria.html"}).
		 when("/catalogo",{templateUrl:"/secciones/catalogo.html"}).
		 when("/contacto",{templateUrl:"/secciones/contacto.html"}).
		 when("/atilio-cum",{templateUrl:"/secciones/atilio-cum.html"})
	});


function maincontroller($scope){
	$scope.person ={name: "Jonathan"};
}

