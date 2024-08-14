const superhero=require('./super-gero.js')

console.log(superhero.getName())
superhero.setName('superman')
console.log(superhero.getName())


//in node js when the module is first loaded module is cached
// So when we try to create a new instance superman is output
// because the superman is changed and cached
const superhero2=require('./super-gero.js')
console.log(superhero.getName())