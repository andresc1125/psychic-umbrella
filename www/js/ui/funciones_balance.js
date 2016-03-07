/* ========================================
		Funciones RETIQ
======================================== */

/* ========================================
		Funciones BALANCE
======================================== */

$(document).ready(function(e) {
	$('.campos').magnificPopup({
		type: 'inline',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		modal:true,
	});
});
jQuery(window).load(function(){
jQuery.magnificPopup.open({
  items: {src: '#form-inicial'},type: 'inline', modal:true, showCloseBtn:true,}, 0);
});
$("#cerrar, #cerrar-equipo").click(function(e) {
    $.magnificPopup.close();
	console.log("reiniciando formularios");
	$(':input','#equipo-form')
	.not(':button, :submit, :reset, :hidden')
	.val('')
	.removeAttr('checked')
	.removeAttr('selected');
	ocultar_campos();
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})