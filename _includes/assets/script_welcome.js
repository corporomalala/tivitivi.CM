document.addEventListener("mousemove",(e)=>{
	var tagCursorArea = document.querySelector(".u-cursor");

	tagCursorArea.style.top = `${e.clientY}px`;
	tagCursorArea.style.left = `${e.clientX}px`;
});