var a = prompt ('Podaj a');
var b = prompt ('Podaj b');
var value = (a*a) + (2 * a * b) - (b*b);
alert('wynik ' +  value);
console.log('wynik: ' + (a*a) + (2 * a * b) - (b*b) );

if (value > 0) {
    value = 'wynik dodatni';
    alert('wynik jest dodatni')
} else if (value < 0) {
    value = 'wynik ujemny';
    alert('wynik jest ujemny')
} else  {
  value = 'wynik wynosi 0'
  alert('wynik wynosi 0')
}

/* ten skrócony zapis nie działa - nie wiem, dlaczego 
var value = (value > == 0)? 'wynik jest dodatni' : 'wynik jest ujemny':'wynik wynosi 0';
*/