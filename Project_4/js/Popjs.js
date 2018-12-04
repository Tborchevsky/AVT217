$(document).ready(function() {
    // run function on initial page load
    menu();
});
 
function menu() {
    $('.in').hover(function(){
         
        $('.in').toggleClass('.showdiv');
     
    });
 
}