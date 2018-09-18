// Credit https://ihatetomatoes.net/create-custom-preloading-screen/

$(document).ready(function() {
    
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1500);
    
});


$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fadeInto').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object/2 ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 

        /* Check the location of each desired element */
        $('.slideInto').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        });
    
    });
    
});