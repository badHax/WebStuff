$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			
			var id = $(this).attr("id");
			var where = null;
			
			switch(id){
				case "home":
					where = "intro";
					break;
				case "me":
					where = "about";
					break;
				case "call":
					where = "contact";
					break;
				case "skill":
					where = "skills";
					break;
				case "proj":
					where = "contact";
					break;
			}
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});
		}
		});
}); 