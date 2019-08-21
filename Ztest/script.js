

const multiply = (number1, number2) => {
	let result = number1 * number2;
	return result;
}


// function multiply(number1, number2) {
// 	let result = number1 * number2;
// 	return result;
// }

console.log(multiply(2, 3));

const otherMultiply = multiply;
//On peut ainsi affecter la fonction à une autre variable
console.log(otherMultiply(2, 3));







// function sayHello() {
// 	console.log(`hello !`);
// }

// sayHello();









let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};


// console.log("**********Parcourons le array :")
// for(let index in weeksOfTHPArray) {
// 	console.log(index); // index va aller de 0 à 3
// 	console.log(weeksOfTHPArray[index]);
// }

console.log("**********Parcourons le array :")
weeksOfTHPArray.forEach(weekContent => {
	console.log(weekContent)
	})




// // console.log("**********Parcourons l'objet :")
// // for(let weekAttribut in weeksOfTHPObject){
// // 	console.log(weekAttribut);
// // 	console.log(weeksOfTHPObject[weekAttribut]);
// // }











// let word ='';
// let letter;

// while(true) {
// 	letter = prompt('tape une lettre')

// 	if (letter) {
// 		word += letter;
// 		console.log(word);
// 	} else{
// 		break;	
// 	}

	
// }


// console.log(`voilà ce que tu as tapé : ${word}`);











// let answer = '';
// while(answer!== 'oui'){
// 	console.log("alors?")
// 	answer = prompt('tu kiffes THP?')
// }

// console.log("haaa, tu nous fais plaisir !")








// for(var count = 0; count <=5; count++){
//   console.log(`on va compter jusqu'à 5 : ${count}`);
// }

// console.log(count); 









// let weekNum = 66;

// switch (weekNum) {
//   case 1:
//     console.log("Semaine 1 - Introduction au Code");
//     break;
//   case 2:
//     console.log("Semaine 2 - Découverte de Ruby");
//     break;
//   case 3:
//     console.log("Semaine 3 - Programmation Orientée Objet");
//     break;
//   case 4:
//     console.log("Semaine 4 - Initiation à Rails");
//     break;
//   case 5:
//     console.log("Semaine 5 - Rails intermédiaire");
//     break;
//   case 6:
//     console.log("Semaine 6 - Rails avancé");
//     break;
//   case 7:
//     console.log("Semaine 7 - HTML / CSS et intro au JS");
//     break;
//   case 8:
//     console.log("Semaine 8 - JavaScript de front");
//     break;

//   default:
//     console.log("Cette entrée n'est pas reconnue");
//     break;
// }




















// console.log("coucou depuis la console");



// let numStudent = 4;
// let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
// console.log(statement);



// const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
// const lesson = contentOfTHP.split("-");
// console.log(lesson[0]); // "Git"
// console.log(lesson[5]); // "JS"



// let THPSessionNum2 = {
//   numOfMouss: 80,
//   cities: ["Paris", "Lyon", "Montpellier"],
//   successRate: 0.80,
//   sessionMoto: "keep pushing to the top"

// };

// console.log(THPSessionNum2.cities[2]);
// THPSessionNum2.cities[2] = "Rennes";
// console.log(THPSessionNum2.cities[2]);
// console.log(THPSessionNum2.cities);

