function triangleTracker(){

	var sideOne = parseInt (document.getElementById("sideOne").value;
	var sideTwo = parseInt (document.getElementById("sideTwo").value;
	var sideThree = parseInt (document.getElementById("sideThree").value;

	if (sideOne === sideTwo && sideOne == sideThree){
	   alert("equilateral")

	}
	else if(sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree){
		 alert("Isosceles")

	}
	else if(sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideThree >sideOne){
		alert("Scalene triangle")

	}
	else {
    alert("Not a triangle")
	}
}
