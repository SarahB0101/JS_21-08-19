let nombreUser = prompt(`De quel nombre veut tu calculer la factorielle ?`)
let total = 1;


for(i=1; i <= nombreUser; i++){
	total = total * i
	console.log(total)
}

console.log(`Le résultat est : ${total}`)