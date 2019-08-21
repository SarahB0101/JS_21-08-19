


function pyramid(nbStairs) {

	for(var i =1; i<= nbStairs; i++){
		var row='';

		for(var j= 1; j<= (nbStairs-i); j++){
			row += ' ';
		}
	

	for (var k = 1; k <= i; k++){
		row +='#';
	}

	console.log(row)
}
}

let nbUser = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");


pyramid(nbUser);


// // simple : 

// for (i=1 ; i<= floors ; i++)
// {
//     console.log(" ".repeat((floors-i)) + "#".repeat(i));
// }






// function pyramid(5) {

// 	for(var i=1; i<= 5; i++){
		
// 		var ligne='';

// 		for(var j= 1; j<= (5-i); j++){ // l'espace prendra -1 à chaque fois
// 			row += ' ';
// 		}
//       # 6 espace + #
//      ## 5 espace + ##
//     ### 4 espace + ###
//    ####
//   #####
//  ######
// #######	

// 	for (var k = 1; k <= i; k++){
// 		row +='#';
// 	}

// 	console.log(row)
// }
// }

// let nbUser = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");


// pyramid(nbUser);