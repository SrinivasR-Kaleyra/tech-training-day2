// let i;
// console.log(i);

// var i;
// console.log(i);

// var is not used in blockscoping, also it initialises the value to undefined
// let is used for blockscoping, it does not initialise the value

var i = 1;
console.log(i);
if(i>0)
{
    let i = "ABCD";
    console.log(i);
}
console.log(i);

// if var is used then the value of the variable outside the block is also affected.
// if let is used then the value of the variable outside the block is not affected

// let cannot override var, it throws error
// var can override let

// let cannot be redeclared