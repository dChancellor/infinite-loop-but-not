const slices = document.querySelectorAll('.wheelSlice_container');

var eachSlice = slices.forEach(el => {
	var mouseRegion = el.children[0].children[1];		
	var components = mouseRegion.parentNode.parentNode.children[1];
	
	mouseRegion.addEventListener("mouseenter", () => {						
		
		components.style["animation"] = "slideOut 0.25s ease-in-out forwards";
		mouseRegion.childNodes[1].classList.replace("st5", "st0");			
	});	
	mouseRegion.addEventListener("mouseleave", () => {		
	
		components.style["animation"] = "slideIn 0.15s ease-in-out forwards";
		mouseRegion.childNodes[1].classList.replace("st0", "st5");
	});	
});


