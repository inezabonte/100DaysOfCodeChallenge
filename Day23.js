function accum(s) {
  var txt = "";
  for(var i = 0; i < s.length; i++) {
    txt += s[i].toUpperCase();
    for(var x = 0; x < i; x++ ) {
      txt += s[i].toLowerCase();
    }
    txt += "-";
  }
  txt = txt.slice(0, txt.length-1);
  
  return txt;

}

console.log(accum('father'));
console.log(accum('Amsterdam'));
console.log(accum('Blaise'));
console.log(accum('Hey'));