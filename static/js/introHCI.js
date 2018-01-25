'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control!");
		// $('.jumbotron button').text("Hey you just clicked me!");
		// another way:
		$('#testjs').text("Hey you just clicked me!");

		// $('#testjs').addClass("active");

		$('#testforactive').addClass("active");
		
	});

	$("a.thumbnail").click(projectClick);

	function projectClick(e){
		e.preventDefault();
		$(this).css("background-color", "#7fff00");

		var containingProject = $(this).closest(".project");
		var description = $(containingProject).find(".project-description");  
		if(description.length == 0) {
			containingProject.append("<div class='project-description'> <p>Description of the project.</p> </div>" );
		} else {
			// description.html("<p>Stop clicking!!! You just did it at " + new Date() + "</p>");
			
			// gradually changes the opacity, for selected elements, from visible to hidden. But the elements are still there.
			// description.fadeOut();   
			
			// The toggle() method toggles between hide() and show() for the selected elements.
            // This method checks the selected elements for visibility. 
            // show() is run if an element is hidden. hide() is run if an element is visible.
			description.toggle();
		}
	}

// lab 3: the css change color undone; Heruko undone;




	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}