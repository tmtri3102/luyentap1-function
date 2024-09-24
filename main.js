// Bai 1
function alertMessage() {
	alert("Xin chao");
}

// Bai 2
function incrementNum(n) {
	document.write(n + 1);
}

// Bai 3
function calculate(a, b) {
	a > b ? alert("a > b") : alert(`Tong a va b la ${a + b}`);
}

// Bai 4
// function addNumbers() {
// 	firstNum = 4;
// 	secondNum = 8;
// 	result = firstNum + secondNum;
// 	return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();
// alert(result);

// Bai 5

function matchName() {
	let starNames = [
		"Polaris",
		"Aldebaran",
		"Deneb",
		"Vega",
		"Altair",
		"Dubhe",
		"Regulus",
	];

	let constellationNames = [
		"Ursa Minor",
		"Tarurus",
		"Cygnus",
		"Lyra",
		"Aquila",
		"Ursa Major",
		"Leo",
	];

	let word = prompt("Type star name");
	let index = starNames.indexOf(word);
	if (index !== -1) {
		document.writeVega(
			`The star ${word} is in the constellation ${constellationNames[index]}`
		);
	}
}
matchName();
