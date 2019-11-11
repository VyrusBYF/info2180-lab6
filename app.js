window.onload = function (){
	var test = document.getElementById("btn").addEventListener("click",myHeroes);
	function myHeroes() {

		var hero = document.getElementById("Hero").value;
		//console.log(hero);
		var httpRequest = new XMLHttpRequest();
		var url = "superheroes.php";

		httpRequest.onreadystatechange = function (){
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
			 	if (httpRequest.status === 200) {
			 		var response = httpRequest.responseText;
			 		document.getElementsByTagName("head").innerHTML="Heroes Found";
			 		document.getElementById("Result").innerHTML=response;
			 	} else {
			 		alert('There was a problem with the request.');
			 	}
			}
		};
		httpRequest.open('GET', url+"?hero="+hero);
		httpRequest.send();
		
	}

}

