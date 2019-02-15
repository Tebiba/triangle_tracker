function triangleTracker(){

	var sideOne = parseInt (document.getElementById('sideOne').value;
	var sideTwo = parseInt (document.getElementById('sideOne').value;
	var sideThree = parseInt (document.getElementById('sideOne').value;
	var answer = parseInt (document.getElementById('sideOne').value;

	// console.log('clickes')
	if (side1==side2 && side2==side3){
		console.log('equal')
		 window.alert('equilateral')
		answer.innerHTML = 'equilateral'
	}
	else if(side1==side2 || side2 ==side3 || side1==side3){
		console.log('iso')
		 window.alert('Isosceles')
		answer.innerHTML = 'Isosceles'
	}

	else if(side1+side2>=side3 || side2+side3>=side1 || side1+side3>=side2){
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
