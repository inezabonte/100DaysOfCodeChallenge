const smiles = new Set()
for (let eyes of [':',';'])
    for (let nose of ['-','~',''])
        for (let mouth of [')','D'])
            smiles.add(eyes+nose+mouth)

countSmileys =(arr)=> arr.filter(x => smiles.has(x)).length

console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))