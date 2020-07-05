document.addEventListener("DOMContentLoaded", function() {
	requestAnimationFrame(function() {
			document.getElementById("loadingBar").style.width = "100%";
	  });
});

window.onload = function () {
document.getElementById("loadingIndicator").style.opacity = "0";
setTimeout(function() {
    document.getElementById("loadingIndicator").style.display = "none";}, 450);
}