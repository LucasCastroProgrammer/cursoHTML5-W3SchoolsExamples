var i = 0;

function timedCount() {
	i = i + 1;
	//O método abaixo é importante pois é usado
	//para enviar uma mensagem de volta ao HTML
	postMessage(i);
	setTimeout("timedCount()", 500);
}

timedCount();