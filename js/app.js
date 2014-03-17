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
	})	
	.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
      $(document).foundation('orbit',{slide_number: false,timer_speed: 5000});
      $(document).ready(function() {
	   $('#foo0').carouFredSel(
			{
		        items               : 2,
		        direction           : "left",
		        scroll : {
		            items           : 1,
		            easing          : "elastic",
		            duration        : 1000,                         
		            pauseOnHover    : true
		        },
		        prev: {
				    button: function() {
				        return $(this).parent().siblings(".prev");
				        }
				    },
				next: {
				    button: function() {
				        return $(this).parent().siblings(".next");
				        }
				    }                   
		    }
    	);
		}); //Termina Carrou

      	frm=$('#contactform');
	  	$('.sendbutton').click(function(){
	  		alert(":C");
	  		datos=frm.serialize();
	  		$.ajax({
	            type: frm.attr('method'),
	            url: 'enviar.php',
	            data: frm.serialize(),
	            success: function (data) {
	                $('#contactform').hide("slow");
	                $('.fcontacto').html(data);
	            }
	        });
	  	});

    	});
  	});






function maincontroller($scope){
	$scope.person ={name: "Jonathan"};
}

