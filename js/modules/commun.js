define(function() {
  var commun = {
    initialize: function() {
		 /*contact*/
			/*slider ui*/
			$( "#slider" ).slider();
			$( "#slider" ).slider({
				change: function(event, ui) {
					if (ui.value == 100) {
						$(".submit-button").fadeIn(1000).show();
					} else {
						$(".submit-button").fadeOut(1000).hide();
					}
				}
			});
			/*slider ui*/
			
     	 /*scrollIt*/
     	 $.scrollIt({
		  upKey: 38,             // key code to navigate to the next section
		  downKey: 40,           // key code to navigate to the previous section
		  easing: 'linear',      // the easing function for animation
		  scrollTime: 600,       // how long (in ms) the animation takes
		  activeClass: 'active', // class given to the active nav element
		  onPageChange: null,    // function(pageIndex) that is called when page is changed
		  topOffset: -94           // offste (in px) for fixed top navigation
		});
     	 /*scrollIt*/
		 
		/*validation*/
			$("#form").validate({
			  rules: {
				// simple rule, converted to {required:true}
				prenom: "required",
				nom: "required",
				email: {
				  required: true,
				  email: true
				},
				societs: "required",
				fonction: "required"
			  },
			   messages: {
                prenom: {
                    required: "Veuillez indiquer votre Prénom",
                },
                nom: {
                    required: "Veuillez indiquer votre Nom",
                },
                email: {
                    required: "Veuillez indiquer votre Email",
                    email: "Veuillez fournir une adresse Email valide",
                },
                societs: {
                    required: "Veuillez indiquer votre Societé",
                },
                fonction: {
                    required: "Veuillez indiquer votre Fonction",
                }
              },
			  submitHandler: function (form) {
                form.submit();
              }
			});
		/*validation*/

     	 /*contact*/

     	 /*peoples*/
     	 
     	$('.plus').click(function () {
     		$('.plus').parent().removeClass('open');
        	$(this).parent().toggleClass('open');
		});
     	 /*peoples*/


     	 /*animation number*/
 	     var isnumberanimation = true;
     	 jQuery(window).scroll(function () {
 	 		if (jQuery('.chiffre-block').length) {
	        	numbers = jQuery('.chiffre-block').offset();
	       		numbersoffset = numbers.top - 500;
	        	if ((jQuery(this).scrollTop() >= numbersoffset) && isnumberanimation) {
	           	 	numberanimation();
	        	}
        	}
 		 });	

 	    function numberanimation() {
	        jQuery('.number').each(function () {
	            jQuery(this).prop('Counter', 0).animate({
	                Counter: jQuery(this).data('number')
	            }, {
	                duration: 1000,
	                easing: 'swing',
	                step: function (now) {
	                	if(jQuery(this).data('number') == now) {
		                   jQuery(this).text(now);
	                	} else if(Math.ceil(now) > jQuery(this).data('number')) {
	                		 jQuery(this).text(Math.ceil(now) - 1);
	                	} else {
	                		jQuery(this).text(Math.ceil(now));
	                	}
	                }
	            });
	        });
	        isnumberanimation = false;
    	}
    	/*animation number*/



    	/*scrollTop*/
    	 var $scrollTop = jQuery('.goTop');
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 300) {
                    $scrollTop.fadeIn();
                } else {
                    $scrollTop.fadeOut();
                }
            });
        /*scrollTop*/    

    }
  };

  return commun;
});
