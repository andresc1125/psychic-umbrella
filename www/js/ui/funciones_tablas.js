/* ========================================
		Funciones RETIQ
======================================== */

/* ========================================
		Funciones TABLAS
======================================== */
$(document).ready(function () {

    (function ($) {

		$("#filtrar").click(function(e) {
            var rex = new RegExp($("#filter").val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();
        });
		$("#reiniciar").click(function(e) {
			$('#filter').val('');
            var rex = new RegExp($("#filter").val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();
        });

    }(jQuery));

});

/*

//Función con Keyup

$(document).ready(function () {

    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        })

    }(jQuery));

});
*/