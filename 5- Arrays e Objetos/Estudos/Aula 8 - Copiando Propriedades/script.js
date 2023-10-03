let obj1 = {
    prop1: 1,
    prop2: 2 
}

let obj2 = {
    prop3: 3 
}

console.log(obj1, obj2)
Object.assign(obj2, obj1)
console.log(obj1, obj2)