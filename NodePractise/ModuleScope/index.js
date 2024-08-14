require('./batman')
require('./superman')

//before a module is executed,Node js will wrap it with a function wrapper(IIFE)that provides module scope 
// This saves us from having to worry about conflicting variables or functions
//  there is proper encapsulation and reusablity is unaffected 