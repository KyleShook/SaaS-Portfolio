wow = new WOW(
       {
       boxClass:     'wow',     
       animateClass: 'animated', 
       offset:       200,         
       mobile:       true,       
       live:         true        
     }
     )
     wow.init();

     $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".menu").addClass("menu-active");
            } else {
            
               $(".menu").removeClass("menu-active");
            }
        });
    });