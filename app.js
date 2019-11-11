window.onload = function (){
	document.getElementsByTagName("button").onclick = myHeroes;

	var httpRequest = new XMLHttpRequest();
	var url = "http://localhost:8080/superheroes.php";
	
	httpRequest.onreadystatechange = myHeroes;
	httpRequest.open('GET', url);
	httpRequest.send();
	
	function myHeroes() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
		 	if (httpRequest.status === 200) {
		 		var response = httpRequest.responseText; 
		 		alert(response);
		 	} else {
		 		alert('There was a problem with the request.');
		 	}
		}
	}


}
