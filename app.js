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
		 			document.getElementById("Banner").innerHTML="Results";
		 			document.getElementById("result").innerHTML=response;
			 	} else {
			 		alert('There was a problem with the request.');
			 	}
			}
			myHeroes.preventDefault();
		};
		httpRequest.open('GET', url+"?hero="+hero);
		httpRequest.send();
		
	}

}

