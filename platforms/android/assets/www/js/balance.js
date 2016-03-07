// JavaScript Document
$(document).ready(function(e) {
    $("#reinicia_vista").css("visibility","hidden");
});
function ver_reporte(){
	$("#reporte").css("visibility","visible");
}
function ocultar_todo(){
	$("#casa").addClass("fadeout");
	$("#habitacion1").css("display","none");
	$("#habitacion2").css("display","none");
	$("#habitacion3").css("display","none");
	$("#habitacion4").css("display","none");
	$("#habitacion5").css("display","none");
	$("#habitacion6").css("display","none");
    $("#reinicia_vista").css("visibility","visible");
    $("#modificar_casa").css("visibility","visible");
	console.log("ocultando todo");
}
function reiniciar(){
	remover_activos();
	$("#casa").removeClass("fadeout");
	$("#casa").css("display","block");
	$("#casa").addClass("fadein");
    $("#reinicia_vista").css("visibility","hidden");
	console.log("Mostrando casa");
}
function remover_activos(){
	$(".menu-cuarto1, .menu-cuarto2, .menu-cuarto3, .menu-cuarto4, .menu-cuarto5, .menu-cuarto6").removeClass("active");
}
function cuarto1(){
	ver_reporte();
	remover_activos();
	$("#casa").css("display","none");
	$("#habitacion1").css("display","block");
	$("#habitacion1").addClass("fadein");
	$(".menu-cuarto4").addClass("active");
	$("#cuarto1-1").addClass("completo");
}
function cuarto2(){
	ver_reporte();
	remover_activos();
	$("#casa").css("display","none");
	$("#habitacion2").css("display","block");
	$("#habitacion2").addClass("fadein");
	$(".menu-cuarto5").addClass("active");
	$("#cuarto1-2").addClass("completo");
}
function cuarto3(){
	ver_reporte();
	remover_activos();
	$("#casa").css("display","none");
	$("#habitacion3").css("display","block");
	$("#habitacion3").addClass("fadein");
	$(".menu-cuarto6").addClass("active");
	$("#cuarto1-3").addClass("completo");
}
function cuarto4(){
	ver_reporte();
	remover_activos();
	$("#casa").css("display","none");
	$("#habitacion4").css("display","block");
	$("#habitacion4").addClass("fadein");
	$(".menu-cuarto1").addClass("active");
	$("#cuarto2-1").addClass("completo");
}
function cuarto5(){
	ver_reporte();
	remover_activos();
	$("#casa").css("display","none");
	$("#habitacion5").css("display","block");
	$("#habitacion5").addClass("fadein");
	$(".menu-cuarto2").addClass("active");
	$("#cuarto2-2").addClass("completo");
}
function cuarto6(){
	ver_reporte();
	remover_activos();
	$("#casa").css("display","none");
	$("#habitacion6").css("display","block");
	$("#habitacion6").addClass("fadein");
	$(".menu-cuarto3").addClass("active");
	$("#cuarto2-3").addClass("completo");
}
$("#reinicia_vista").click(function(e) {
	remover_activos();
	ocultar_todo();
    reiniciar();
});
$("#cuarto1-1, .menu-cuarto4").click(function(e) {
	ocultar_todo();
	cuarto1();
});
$("#cuarto1-2, .menu-cuarto5").click(function(e) {
	ocultar_todo();
	cuarto2();
});
$("#cuarto1-3, .menu-cuarto6").click(function(e) {
	ocultar_todo();
	cuarto3();
});
$("#cuarto2-1, .menu-cuarto1").click(function(e) {
	ocultar_todo();
	cuarto4();
});
$("#cuarto2-2, .menu-cuarto2").click(function(e) {
	ocultar_todo();
	cuarto5();
});
$("#cuarto2-3, .menu-cuarto3").click(function(e) {
	ocultar_todo();
	cuarto6();
});

function ocultar_campos(){
	$("#equipo1").css("display","none");
	$("#equipo2").css("display","none");
	$("#equipo3").css("display","none");
	$("#equipo4").css("display","none");
}
$(document).ready(function(e) {	
	$(".campos").click(function(e) {
        $(this).addClass("completo");
    });
	$("#equipos").mouseup(function(e) {
		ocultar_campos();
        if(equipos.value==1){
			$("#equipo1").css("display","block");
			console.log("primer equipo agregado");
		}
        else if(equipos.value==2){
			$("#equipo1, #equipo2").css("display","block");
			console.log("segundo equipo agregado");
		}
        else if(equipos.value==3){
			$("#equipo1, #equipo2, #equipo3").css("display","block");
			console.log("tercer equipo agregado");
		}
        else if(equipos.value==4){
			$("#equipo1, #equipo2, #equipo3, #equipo4").css("display","block");
			console.log("cuarto equipo agregado");
		}
		else{
			console.log("Ningún valor seleccionado");
		}
    });
});