$(document).ready(function() {
    // run function on initial page load
    demoFunction();
    // vPosH1();
 
    // run function on resize of the window
    $(window).resize(function() {
      // vPosH1();
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
 
// mouse event link https://api.jquery.com/category/events/mouse-events/
function demoFunction() {
    
    $('.jqClick').click(function() {
        $('.header').toggleClass('bigger');

    })

    $('.jclick').click(function() {
        $('.header2').toggleClass('pic');
    })

    $('.jjclick').hover(function() {
        $('.header3').toggleClass('Clank');
    })

    $('.tclick').hover(function() {
        $('.header4').toggleClass('halo');
    })

     $('.gclick').hover(function() {
        $('.header5').toggleClass('metal');
    })

      $('.gclick').mouseover(function() {
        $('.header5').toggleClass('cod');
    })



}