function triangleTracker(){

	var sideOne = parseInt (document.getElementById("sideOne").value);
	var sideTwo = parseInt (document.getElementById("sideTwo").value);
	var sideThree = parseInt (document.getElementById("sideThree").value);

  var side = [sideOne, sideTwo, sideThree];


  if (side[0] + side[1] <= side[2] || side[0] + side[2] <= side[1] || side[2] + side[1] <= side[0]){
      alert("This is not a triangle");

  } else if (side[0] === side[1] && side[0] === side[2]) {
      alert("This is an equilateral triangle");

  } else if (side[0] === side[1] || side[0] === side[2] || side[1] === side[2]) {
      alert("This is an isosceles triangle")


  } else if (side[0] + side[1] > side[2] && side[0] + side[2] > side[1] && side[1] + side[2] > side[0]){
      alert("This is a scalene triangle")

  } else {
      alert("This is not a triangle");
  }
}
