function triangleTracker(){

	var sideOne = parseInt (document.getElementById('sideOne').value;
	var sideTwo = parseInt (document.getElementById('sideTwo').value;
	var sideThree = parseInt (document.getElementById('sideThree').value;

	// console.log('clickes')
	if (sideOne === sideTwo && sideOne == sideThree){
		console.log('equal')
		 window.alert('equilateral')
		answer.innerHTML = 'equilateral'
	}
	else if(sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree){
		console.log('iso')
		 window.alert('Isosceles')
		answer.innerHTML = 'Isosceles'
	}
	else if(sideOne + sideTwo > sideThree && sideOne + sideThree >= sideOne || sideOne + sideThree >= sideTwo){
		console.log('not')
		window.alert('Not a triangle')
		answer.innerHTML = 'Not a triangle'
	}
	else {
		console.log('scal	')
		 window.alert('Scalene')
		answer.innerHTML = 'Scalene'
	}
	answer.classList.remove('d-none')
