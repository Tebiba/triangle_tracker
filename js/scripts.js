function triangleTracker(){

	var sideOne = parseInt (document.getElementById("sideOne").value);
	var sideTwo = parseInt (document.getElementById("sideTwo").value);
	var sideThree = parseInt (document.getElementById("sideThree").value);

// if( sideOne <= (sideTwo+sideThree) && sideTwo <= (sideOne+sideThree) && sideThree <= (sideOne+sideTwo){
if(sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideThree > sideOne){
	if (sideOne === sideTwo && sideOne == sideThree){
	   alert("Equilateral");

	}
	else if(sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree){
		 alert("Isosceles");

	}
}
	else {
    alert("Not a triangle");
	}
// }else {
//   confirm("the measurements you entered do not fit a triangle");
// }
}

triangleTracker();

// function form(){
//
