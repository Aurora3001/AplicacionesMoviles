let word;
let state;

function reverseString(j) {
    var newString = "";
    for (var i = j.length - 1; i >= 0; i--) {
        newString += j[i];
    }
    return newString;
}

word = prompt('Inserte la palabra o frase');
let newWord = word.replace(/ /g, "");
console.log(newWord);
console.log(reverseString(newWord));

if (newWord == reverseString(newWord)){
    console.log('La palabra '+newWord+ ' es un palindromo.');

}else{
    console.log('La palabra '+newWord+ ' no es un palindromo.')
}