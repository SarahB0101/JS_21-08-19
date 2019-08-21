const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;


// console.log("**********Parcourons le array :")
// entrepreneurs.forEach(entrepreneur => {
//     if ((entrepreneur.year >= 1970) && (entrepreneur.year <= 1979)){
//        console.log(entrepreneur.year)
//      }
//   })


var newArray = entrepreneurs.filter(entrepreneur =>(entrepreneur.year >= 1970) && (entrepreneur.year <= 1979));
console.log(newArray);



// Sors une array qui contient le prénom et le nom des entrepreneurs ;
nameTableau = []
entrepreneurs.forEach(entrepreneur => nameTableau.push(entrepreneur.first + " " + entrepreneur.last))
console.log(nameTableau)




//Quel âge aurait chaque inventeur aujourd'hui ?
entrepreneurs.forEach(entrepreneur => console.log(`Aujourd'hui, ${entrepreneur.first} a ${2019 - entrepreneur.year} ans`));





// Trie les entrepreneurs par ordre alphabétique du nom de famille.
entrepreneurs.sort(function(a, b){
  var x = a.last.toLowerCase();
  var y = b.last.toLowerCase(); 
  if (x<y) {return -1;}
  if (x>y) {return 1;}
  return 0;

});
  
console.log(entrepreneurs)






