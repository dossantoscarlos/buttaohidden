window.onload = (function(){
	var button = document.getElementById('button');
	init(button);
	config(10);
});

var init = (button) => {
	button.setAttribute('hidden','');	
}

var config = (milisecundos) => {
	var convert = (milisecundos*1000);
	window.setTimeout(display, convert);
	function display(){
		button.removeAttribute('hidden');
	}
}