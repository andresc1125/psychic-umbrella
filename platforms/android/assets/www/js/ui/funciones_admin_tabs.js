$(document).ready(function(){
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
        var activeTab = $(e.target).text(); // Get the name of active tab
        var previousTab = $(e.relatedTarget).text(); // Get the name of previous tab
        console.log("Avtive Tab: " +activeTab );
        console.log("Previous Tab: " +previousTab );
    });
});
