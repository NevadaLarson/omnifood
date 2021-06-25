$(document).ready(function(){ //this is saying that when the docoment is loded/ready then perform this function..... $() is a selector 
//for the sticky navigation
    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
              if (direction == "down") {
                  $('nav').addClass('sticky');
              } 
              else {
                  $('nav').removeClass('sticky');
              }
          }, offset: '60px'
      });

      $('.js--scroll-to-plan').click(function(){
          $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
      });

      $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

       // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      //animate on scroll
      var waypoint = new Waypoint({
        element: $('.js--wp-1'),
        handler: function(direction) {
              $('.js--wp-1').addClass('animated fadeIn');
          }, offset: '50%;'
      });
      var waypoint = new Waypoint({
        element: $('.js--wp-2'),
        handler: function(direction) {
              $('.js--wp-2').addClass('animated fadeInUp');
          }, offset: '50%;'
      });
      var waypoint = new Waypoint({
        element: $('.js--wp-3'),
        handler: function(direction) {
              $('.js--wp-3').addClass('animated fadeIn');
          }, offset: '50%;'
      });
      var waypoint = new Waypoint({
        element: $('.js--wp-4'),
        handler: function(direction) {
              $('.js--wp-4').addClass('animated pulse');
          }, offset: '50%;'
      });


     /* $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
      })*/

      $(window).resize(function(){

        var nav = $('.js--main-nav');
        
        var icon = $('.js--nav-icon i');
        
        if ($(window).width() > 750){
        
        nav.css("display", "block");
        
        icon.addClass('ion-close-round');
        
        icon.removeClass('ion-navicon-round');
        
        } else {
        
        nav.css("display", "none");
        
        icon.addClass('ion-navicon-round');
        
        icon.removeClass('ion-close-round');
        
        }
        
        });

      $('.js--nav-icon').click(function(){
        const nav = $('.js--main-nav')
        const icon = $('.js--nav-icon ion-icon')
       
        nav.slideToggle(200);
 
        
        if (icon.attr("name") == "menu") {
          icon.attr("name","close");
         }
         else {
          icon.attr("name", "menu");
         }
    })

});
