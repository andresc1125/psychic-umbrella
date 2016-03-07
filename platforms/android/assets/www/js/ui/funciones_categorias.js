/* ========================================
		Funciones RETIQ
======================================== */

/* ========================================
		Funciones CATEGORIAS
======================================== */

var $grid = $('.grid').masonry({
  columnWidth: 0,
});
// change size of item by toggling gigante class
$grid.on( 'click', '.col-md-4', function() {
	setTimeout(function(){
		$grid.masonry('layout');
	}, 400);	
});