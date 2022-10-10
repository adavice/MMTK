

$('form').on('submit',function(){
	document.getElementById('popUpDiv').style.display = 'block';
	localStorage.setItem('justSubmitted', true);
	
});
if (localStorage.getItem('justSubmitted')) {
	document.getElementById('popUpDiv').style.display = 'block'
}

let closePop = document.getElementById('closePop');
let popUpDiv = document.getElementById('popUpDiv');
	closePop.addEventListener('click', hidePopUp);
	popUpDiv.addEventListener('click', hidePopUp);
function hidePopUp() {
	document.getElementById('popUpDiv').style.display = "none";

}