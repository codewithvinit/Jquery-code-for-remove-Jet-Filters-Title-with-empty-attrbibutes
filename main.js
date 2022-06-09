jQuery(document).ready( function($){
    setTimeout(function(){
        setInterval(function(){
            jQuery(".jet-filter").each(function(){
                var matched = jQuery("div",this);
                if(matched.length === 1) {
                    if(jQuery(this).hasClass('hide-label')) {
                        // Code Action here
                    } else {
                        jQuery(this).addClass("hide-label");
                    }
                } else {
                    if(jQuery(this).hasClass('hide-label')) {
                        jQuery(this).removeClass("hide-label");
                    } else {
                        // Code Action here    
                    }
                }
            });
        }, 5000);
    }, 2000);
});
