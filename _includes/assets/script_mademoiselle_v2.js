/*** FUNCTIONS ***/
	/*** inline buttons ***/
	function do5starsReview(theTag) {
		if(!theTag.closest("div").classList.contains("is-voted")) {
			theTag.closest("div").classList.add("is-voted");
			theTag.classList.add("is-voted");
		}
	}
	
	function doToggleMedia{{ i }}(iFile) {
		var theTag = document.querySelector(".solutions-content-list-item:nth-child("+ iFile +") figure");
		if(theTag.classList.contains("is-nthChild1")) {
			theTag.classList.remove("is-nthChild1");
			theTag.classList.add("is-nthChild2");
		} else if(theTag.classList.contains("is-nthChild2")) {
			theTag.classList.remove("is-nthChild2");
			theTag.classList.add("is-nthChild1");
		};
	}
/*** END FUNCTIONS ***/