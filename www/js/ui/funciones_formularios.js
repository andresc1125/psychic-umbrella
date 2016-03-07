/* ========================================
		Funciones RETIQ
======================================== */

/* ========================================
		Funciones FORMULARIOS
======================================== */

$('#file-es').fileinput({
	language: 'es',
	uploadUrl: '#',
	allowedFileExtensions : ['jpg', 'png','gif'],
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})